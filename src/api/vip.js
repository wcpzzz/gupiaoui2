import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/cust/list',
    method: 'get',
    params: params
  })
}
export function update(params) {
  return request({
    url: '/cust/update',
    method: 'put',
    data: params
  })
}


