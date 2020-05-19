import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use((response) => response.data)



export const getList = () => axios.get('/getList')
