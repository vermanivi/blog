import { onPost, onGet } from 'service/network';

const endpoints = {
    register: "/users/register",
    login: "/users/login",
    blogList: "feed/newsFeed",
    articleById: (id) => `/feed/newsFeed/${id}`,
    addBlog: "feed/createArticle"
}


const register = (body) => {
    return onPost(endpoints.register, body, null, false);
}

const login = (body) => {
    return onPost(endpoints.login, body, null, false);
}

const getBlogList = () => {
    return onGet(endpoints.blogList, null, false);
}

const getArticleById = (id) => {
    return onGet(endpoints.articleById(id), null, false);
}

const addBlog = (body) => {
    return onPost(endpoints.addBlog, body, null, true)
}

const operations = {
    register,
    login,
    getBlogList,
    getArticleById,
    addBlog
}

export default operations;