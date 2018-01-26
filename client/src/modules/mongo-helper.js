'use strict';

const db = require('./db-setup');

function getArticle(record) {
    return record.article;
}

function documentToArticleData(document) {
    return {
        id: document._id,
        title: document.title.map(getDescription),
        date: document.date.map(getDescription),
        url: document.url.map(getDescription)
    };
}

function getDefaultArticleData() {
    return {
        title: [],
        date: [],
        url: []
    };
}

function descriptionArticleToObject(description) {
    return { description: description };
}

function articleDataToDocument(todoData) {
    return {
        title: articleData.title.map(descriptionToObject),
        date: articleData.date.map(descriptionToObject),
        url: articleData.url.map(descriptionToObject)
    };
}

function readArticleList(callback) {
    db.ArticleList.findOne({}, function (error, document) {
        let articleData = null;

        if (!error) {
            articleData = document === null
                ? getDefaultArticleData()
                : documentToArticleData(document);
        }

        callback(null, articleData);
    });
}

function updateArticleList(articleData, callback) {
    const docData = articleDataToDocument(articleData);

    db.ArticleList.findOne({ _id: articleData.id }, function (error, document) {
        if (error) {
            callback(error);
        } else {
            document.title = docData.title;
            document.date = docData.date;
            document.url = docData.url;
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
    readArticleList: readArticleList,
    updateArticleList: updateArticleList
}