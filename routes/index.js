const express = require("axios");
const router = require("express").Router();

const dbHelper = require('../modules/mongo-helper');

router.get('/articles', function(request, response) {
  dbHelper.readArticleList(function (error, data) {
    if(error) {
      console.log('An error occurred while reading the article list', error);
      response.status(400).end('Unable to retrieve data');
    } else {
      response.json(data);
    }
  });
});

router.post('/articlelist', function (request, response){
  dbHelper.createArticleList(request.body, function(error, data){
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