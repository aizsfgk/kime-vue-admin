// import request from '@/utils/request'

// 登录
export function login(data) {
  return `{
    "data": {
      "token": "zsf-token-api"
    }
  }`
}


// 获取用户信息
export function getInfo(token) {
  return `{
    "data": {
      "name": "李四"
    }
  }`
}


// 登出
export function logout() {
  return `{
    
  }`
}