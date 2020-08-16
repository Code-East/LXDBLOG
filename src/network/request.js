//自己封装的axios函数
import axios from 'axios';

export function request(config) {
    //创建一个axios实例
    const axiosDome = axios.create({
        baseURL: 'http://localhost:3000',
    });
    //真正的发送请求，相当于 axios({ }),因为它本身就是一个promise所以就直接把它return出去
    return axiosDome(config);
}