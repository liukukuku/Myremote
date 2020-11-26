import qs from 'qs'
import axios from 'axios'
let http = axios.create()
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.method==='post' && !(config.data instanceof FormData)) {
        config.data.token = sessionStorage.getItem('auth')
        config.data = qs.stringify(config.data)
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default http