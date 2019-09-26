import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://207.154.246.55:8181/api/auth'// 'http://localhost:8181/api/auth' //
})

export default instance
