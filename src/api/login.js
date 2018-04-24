import fetch from '@/utils/fetch'

/* 登录获取sessionId */
export function login(mobile, password) {
  return fetch({
    url: '/user/',
    method: 'post',
    data: {
      method: 'login',
      params: {
        mobile,
        password
      }
    }
  })
}
