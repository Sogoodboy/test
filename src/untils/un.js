import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use((req) => {
    console.log(req);
    const token = localStorage.getItem('token')
    console.log(token);

    if (token) {

        req.headers.token = token
    }
    if (req.method === 'post') {
        req.data = qs.stringify(req.data)
    }

    return req
}, (err) => {
    console.log(err);

})