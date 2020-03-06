import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/coupons',
    method: 'get',
    params: params
  })
}
export function update(params) {
  return request({
    url: '/coupon',
    method: 'put',
    data: params
  })
}


