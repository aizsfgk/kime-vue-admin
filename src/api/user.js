
// 登录
export function login(data) {
  return new Promise((resolve, reject) => {
    resolve({"data":{"token":"zsf-token-api"}})
  })
}

// 获取用户信息
export function getInfo(token) {
  return new Promise((resolve, reject) => {
    resolve({"data":{"name":"李四"}})
  })
}


// 登出
export function logout() {
  return new Promise((resolve, reject) => {
    resolve({})
  })
}