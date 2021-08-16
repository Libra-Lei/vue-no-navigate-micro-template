/**
 * @Description: http
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 15:30:36
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-13 15:33:03
 */

import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 180000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers['Authorization'] = `Bearer ${store.getters.token.idToken}`;
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response

    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else if (res.status === 403) {
      return Promise.reject('No Authority');
    } else {
      return res.data.data
    }
  },
  error => {
    console.log('error------------------: ', error);
    // console.log('service bug', error) // for debug
    // window.$wm_notify_danger('错误', error.message)
    // return Promise.reject(error)
    if (error.response.status === 401) {
      console.error('正常api请求401')
    } else {
      console.error('service-error:::', error) // for debug
      return Promise.reject(error)
    }
  }
)

export default service
