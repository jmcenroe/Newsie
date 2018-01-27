'use strict';

const db = require('./db-setup');

function getDescription(record) {
    return record.description;
}

function documentToHomeData(document) {
    return {
        id: document._id,
        home: document.articles.map(getDescription),
        saved: document.saved.map(getDescription)
    };
}

function getDefaultArticleData() {
    return {
        home: [],
        saved: []
    };
}

function descriptionToObject(description) {
    return { description: description };
}

function articleDataToDocument(homeData) {
    return {
        home: articleData.home.map(descriptionToObject),
        saved: articleData.saved.map(descriptionToObject)
    };
}

function readArticleList(callback) {
    db.articleList.findOne({}, function (error, document) {
        let articleData = null;

        if (!error) {
            articleData = document === null
                ? getDefaultArticleData()
                : documentToArticleData(document);
        }

        callback(null, articleData);
    });
}

function updateArticleList(homeData, callback) {
    const docData = homeDataToDocument(homeData);

    db.Articles.findOne({ _id: articleData.id }, function (error, document) {
        if (error) {
            callback(error);
        } else {
            document.home = docData.home;
            document.saved = docData.saved;
            document.save((saveError) => callback(saveError, document));
        }
    });
}

function createArticleList(articleData, callback) {
    const docData = articleDataToDocument(articleData);

    db.ArticleList.create(docData, function (error, doc) {
        let articleData = null;

        if (!error) {
            articleData = documentToArticleData(doc);
        }

        callback(error, articleData);
    });
}

module.exports = {
    createArticleList: createArticleList,
    readArticlesList: readArticleList,
    // removeArticles: removeArticles
}