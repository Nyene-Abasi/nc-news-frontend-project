import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-db.onrender.com/api',
});

export const getAllArticles = async (topic, sort_by, order) => {
    const resp = await api.get('/articles', {params: { topic, sort_by, order }});
    return resp.data.articles
}

export const getOneArticle = async (article_id) => {
    const resp = await api.get(`/articles/${article_id}`);
    
    return resp.data.article;
}

export const getComment = async (article_id) => {
    const resp = await api.get(`/articles/${article_id}/comments`);
    return resp.data.comments;
}

export const patchVote = async (article_id) => {
    const body = {
        incVotes: 1
    }
    const resp = await api.patch(`/articles/${article_id}`, body);
    return resp.data.article;
}

export const getTopics = async () => {
    const resp = await api.get('/topics');
    return resp.data.topics
}
export const postComment = async (requestedBody, article_id) => {
    
    const resp = await api.post(`/articles/${article_id}/comments`, requestedBody);
    return resp.data.comment;
};
