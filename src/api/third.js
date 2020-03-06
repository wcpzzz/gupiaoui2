import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/orgs',
    method: 'get',
    params: params
  })
}
export function update(params) {
  return request({
    url: '/org',
    method: 'put',
    data: params
  })
}



