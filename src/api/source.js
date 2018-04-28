import fetch from '@/utils/fetch'
// 部分接口是之前hms下面不是BOP
const hmsUrl = 'https://api.mdguanjia.com/hms/api/hmsuser'
// 搜索殷勤的url
const searchUrl = 'https://www.mdguanjia.com/search/room/search'

/* 获取用户列表 */
export function queryListByPageApi(params = {}) {
  return fetch({
    url: '/flying/guestSource/',
    method: 'post',
    data: {
      method: 'queryListByPage',
      params
    }
  })
}
// 查询房源
export function saveOrUpdateApi(params = {}) {
  return fetch({
    url: '/flying/guestSource/',
    method: 'post',
    data: {
      method: 'saveOrUpdate',
      params
    }
  })
}

/* 获取用户列表 */
export function getApi(params = {}) {
  return fetch({
    url: hmsUrl,
    method: 'post',
    isHms: true,
    data: {
      method: 'cityManagers',
      params
    }
  })
}

/* 房源列表 */
export function houseApi(params = {}) {
  return fetch({
    url: searchUrl,
    method: 'post',
    isSearch: true,
    data: params
  })
}

/* 获取用户名 */
export function getUserNameApi(params = {}) {
  return fetch({
    url: hmsUrl,
    method: 'post',
    isHms: true,
    data: {
      method: 'queryUserInfo',
      params
    }
  })
}

// 查询板块信息
export function plateApi(params = {}) {
  return fetch({
    url: '/house/region/',
    method: 'post',
    data: {
      method: 'query.region.zone',
      params
    }
  })
}

// 查询客源详情
export function detailApi(params = {}) {
  return fetch({
    url: '/flying/guestSource/',
    method: 'post',
    data: {
      method: 'detail',
      params
    }
  })
}

// 客源更进
export function saveFollowInfoApi(params = {}) {
  return fetch({
    url: '/flying/guestSource/',
    method: 'post',
    data: {
      method: 'saveFollowInfo',
      params
    }
  })
}
