import request from './axios'


//用户登录
function login(data){
  return request({
    url:'login',
    data,
    method:'POST'
  })
}

export default {
  login
}