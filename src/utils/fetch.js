/*
 * @Author: chenxing
 * @Date: 2018-04-19 17:10:17
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-04-23 11:46:16
 */

import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getSessionId } from '@/utils/auth'

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
    reqId: '0010C2379272774D6EC087B917CE2A71438DEF90',
    sign: '8F4C4A8E9D850EDD9692DE38723D0543'
  }
  if (config.method.toUpperCase() === 'POST') {
    // if (store.getters.sessionId) {
    //   config.data['sessionId'] = getSessionId()
    // }
    if (!config.noAssign) {
      config.data = Object.assign(config.data, defaultConfig)
    }
  } else {
    // if (store.getters.sessionId) {
    //   config.params['sessionId'] = getSessionId()
    // }
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
    if (res.code !== 0) {
      if (res.code === 1011) {
        if (res.message === '无数据') {
          return response.data
        }
      }
      return Promise.reject(res.message)
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
