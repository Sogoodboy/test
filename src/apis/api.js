import axios from 'axios'
// import qs from 'qs'
axios.defaults.baseURL = `http://localhost:8000`
export const loginApi = (params) => axios.post('/login', params)