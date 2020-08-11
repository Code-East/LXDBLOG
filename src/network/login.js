// 导入封装好的axios
import { request } from './request';

// 获取获取用户数据
export function getUser(config) {
    return request({
        url: '/userdata',
        method: 'post',
        // withCredentials: true,
        params: config
    })
}

export function getIsLogin(config) {
    return request({
        url: '/isLogin',
        params: config
    })
}

export function setToken(config) {
    return request({
        url: '/setToken',
        params: config
    })
}