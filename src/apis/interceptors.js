import axios from 'axios'

const service = axios.create({
  timeout: 5000
})

service.interceptors.request.use((config) => {
  // Do something before request is sent
  config.headers['X-Token'] = 'XXXXXXXXXXX'
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
service.interceptors.response.use((response) => {
  // Do something with response data
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.log('token失效')
        break
    }
  }
  return Promise.reject(error.response.data)
})

export default service
