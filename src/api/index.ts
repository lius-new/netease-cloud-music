import axios from 'axios'
import config from '../config'

const api = axios.create({
  baseURL: config.backend.baseURL,
})

// request拦截器
api.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
)

// response 拦截器
api.interceptors.response.use(
  // 一般处理状态码
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err)
)

export default api
