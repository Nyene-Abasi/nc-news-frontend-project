import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-db.onrender.com/api',
});

export const getAllArticles = async () => {
    const resp = await api.get('/articles');
    return resp.data.articles
}

export const getOneArticle = async (article_id) => {
    const resp = await api.get(`/articles/${article_id}`);
    
    return resp.data.article;
}
