import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre

export const searchCmsPageList = (page, size, params) => {
  return http.requestQuickGet('http://api.mooc.com/api/cms/cmsPage/list/'+page+'/'+size)
}

