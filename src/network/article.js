// 导入封装好的axios
import { request } from './request';
// 获取文章
export function getArticle(config) {
    return request({
        url: '/back/article',
        params: config
    });
}
// 获取文章总数
export function getArticleLen() {
    return request({
        url: '/back/articlelen',
    });
}
//存入文章
export function savingArticles(config) {
    return request({
        url: '/back/store',
        method: 'post',
        params: config
    });
}
// 搜索数据
export function searchArticle(config) {
    return request({
        url: '/back/search',
        method: 'post',
        params: config
    });
}
// 删除文章
export function delArticle(id) {
    return request({
        url: '/back/del',
        method: 'post',
        params: { id }
    });
}
// 修改文章
export function setArticle(config) {
    return request({
        url: '/back/setarticle',
        method: 'post',
        params: config
    });
}
// 获取文章评论
export function getComment(id) {
    return request({
        url: '/getcomment',
        params: { id }
    })
}
// 增加文章评论
export function addComment(config) {
    return request({
        url: '/addcomment',
        params: config,
        method: 'post'
    })
}