// 导入封装好的axios
import { request } from './request';

// 获取分类
export function getClassIfyData(config) {
    return request({
        url: '/classify',
        params: config
    })
}
// 删除分类
export function delClassIfyData(id) {
    return request({
        url: '/classify/delclassify',
        method: 'post',
        params: { id }
    })
}
// 增加分类
export function addClassIfyData(config) {
    return request({
        url: '/classify/addclassify',
        method: 'post',
        params: config
    })
}
// 修改分类
export function setClassIfyData(config) {
    return request({
        url: '/classify/setclassify',
        method: 'post',
        params: config
    })
}