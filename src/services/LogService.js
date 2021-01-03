import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLogs(perPage, page) {
    return apiClient.get('/logs?_limit=' + perPage + '&_page=' + page)
  },
  getLog(id) {
    return apiClient.get('/logs/' + id)
  },
  postLog(log) {
    return apiClient.post('/logs', log)
  }
}
