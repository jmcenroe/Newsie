const express = require("express");
const router = express.Router();
const express = require("request");

const mongoHelper = require('../modules/mongo-helper');

router.get('/articles', function(request, response) {
  mongoHelper.readArticleList(function (error, data) {
    if(error) {
      console.log('An error occurred while reading the article list', error);
      response.status(400).end('Unable to retrieve data');
    } else {
      response.json(data);
    }
  });
});

router.post('/articlelist', function (request, response){
  mongoHelper.createArticleList(request.body, function(error, data){
    if(error) {
      console.log('An error occurred while writing the article list', error);
      response.status(400).end('Unable to create data');
    } else {
      response.json(data);
    }
  });
});

router.remove('/article', function (request, response){
  mongoHelper.removeArticle(request.body, function(error, data){
    if(error) {
      console.log('An error occurred while deleting the article', error);
      response.status(400).end('Unable to delete data');
    } else {
      response.json(data);
    }
  });
});

module.exports = router;