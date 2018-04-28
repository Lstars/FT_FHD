/*
 * @Author: chenxing
 * @Date: 2018-04-19 17:10:17
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-04-27 16:53:15
 */

import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API
  /*   timeout: 5000 // 请求超时时间*/
})

// request拦截器
service.interceptors.request.use(config => {
  const defaultConfig = {
    version: '1.0',
    timestamp: new Date().getTime(),
    sign: '8F4C4A8E9D850EDD9692DE38723D0543'
  }
  if (config.method.toUpperCase() === 'POST') {
    if (!config.isSearch) {
      const sessionId = localStorage.getItem('sessionId')
      if (config.isHms) {
        config.data.params.sessionId = sessionId
      } else {
        defaultConfig.sessionId = sessionId
      }
      if (!config.noAssign) {
        config.data = Object.assign(config.data, defaultConfig)
      }
    }
  } else {
    if (!config.noAssign) {
      config.params = Object.assign(config.params, defaultConfig)
    }
  }
  return config
}, error => {
  console.log('【REQUEST】' + error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.success) {
      return response.data
    } else if (res.code !== '0') {
      if (res.code === '1011') {
        if (res.message === '无数据') {
          return response.data
        }
      }
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    console.log('【response】' + error)
    return Promise.reject(error)
  }
)

export default service
