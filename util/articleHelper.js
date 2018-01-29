const db = require("../client/src/db-setup");

// Get all articles from the database
const getArticles = (cb) => db.article.find({}, (err, articles) =>
    if (err) cb(err); cb(null, articles);
);

// Inserts unique article into database
const saveArticle = (article, cb) =>
    const revisedArticle = prepareArticle(article);
articleExists(revisedArticle(exists) =>
    if (!exists) {
        db.article.create(revisedArticle, (err, savedArticle) =>
            if (err) cb(err); cb(null, savedArticle);
        )
    } else {
        cb()
    };
);

// Checks if article exists in database
// Calls back true if exists, false if it does not exist
const articleExists = (record, cb) =>
    db.article.findOne({ 'title': record.title }, (err, record) =>
        if (err) console.log(err);
        else if (record) cb(true);
        else cb(false);
    );

// Prepares article data from New York Times in same format
// as database schema
const prepareArticle = (artcile) =>
    return {
        url: article.web_url,
        title: article.headline.main,
        date: article.pub_date
    };

// Deletes article by id
const deleteArticle = (articleID, cb) =>
    db.article.findByIdAndRemove(artricleID, (err) =>
        if (err) cb(articleID); 
        cb(null);
    );

module.exports = {
	saveArticle: saveArticle,
	getArticles: getArticles,
	deleteArticle: deleteArticle
}