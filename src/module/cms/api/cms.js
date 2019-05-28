import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre

// 获取cmsPage列表
export const searchCmsPageList = (page, size, params) => {
  return http.requestQuickGet('http://api.mooc.com/api/cms/cmsPage/list/' + page + '/' + size)
}
// 添加cmsPage页面
export const addCmsPage = (params) => {
  return http.requestPost('http://api.mooc.com/api/cms/cmsPage/add', params)
  // return http.requestPostForm('http://api.mooc.com/api/cms/cmsPage/add',params)
}
// 删除cmsPage
export const deleteCmsPage = (pageId) => {
  return http.requestDelete('http://api.mooc.com/api/cms/cmsPage/delete/' + pageId)
}

//获取cmsSite列表
export const searchAllCmsSite = () => {
  return http.requestQuickGet('http://api.mooc.com/api/cms/cmsSite/all')
}
//获取cmsTemplate列表
export const searchAllCmsTemplate = () => {
  return http.requestQuickGet('http://api.mooc.com/api/cms/cmsTemplate/all')
}

