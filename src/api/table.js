import request from '@/utils/request'

export function showK(data) {
  return request({
    url: '/gupiao/showK',
    method: 'post',
    data
  })
}

export function analysis(data) {
  return request({
    url: '/gupiao/analysis',
    method: 'post',
    data
  })
}

export function gupiaoList(data) {
  return request({
    url: '/gupiao/gupiaoList',
    method: 'post',
    data
  })
}





export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}



