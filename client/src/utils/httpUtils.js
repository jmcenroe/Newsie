import axios from 'axios';

const articleListPath = '/articles';

function getArticleData() {
    return axios.get(articleListPath);
}

function createArticleData(ArticleData) {
    return axios.post(articleListPath, articleData);
}

function removeArticleData(articleData) {
    return axios.remove(articlePath, todoData);
}

export default {
    getArticleData: getArticleData,
    createArticleData: createArticleData,
    removeArticleData: removeArticleData
}