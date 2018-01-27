import axios from 'axios';

const articleListPath = '/articles';

function getArticleData() {
    return axios.get(articlesPath);
}

function createArticleData(ArticleData) {
    return axios.post(articlesPath, articleData);
}

function removeArticleData(articleData) {
    return axios.remove(todolistPath, todoData);
}

export default {
    getArticleData: getArticleData,
    createArticleData: createArticleData,
    removeArticleData: removeArticleData
}