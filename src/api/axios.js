import axios from 'axios'
// import { Message } from 'element-ui'
// import { clearAll, getToken } from '@/utils/myAuth'
// import router from '@/router'


const service = axios.create({
    // baseURL: 'http://leju.bufan.cloud',
    timeout: 5000,
})


service.interceptors.request.use(
    // config => {

    //     const token = getToken()
    //     if (token) {
    //         config.headers['token'] = token
    //     }
    //     return config
    // },
    // error => {
    //     return Promise.reject(error)
    // }
)


service.interceptors.response.use(
    // response => {
    //     const res = response.data
    //     if (res.code === 20002) {

    //         clearAll()
    //         router.push('/login')
    //     }
    //     return res
    // },
    // error => {
    //     console.log('err' + error)
    //     Message({
    //         message: error.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //     })
    //     return Promise.reject(error)
    // }
)

function http(options) {
    var myOptions = {
        method: options.method,
        url: options.url,
        headers: {}
    }
    if (options.data) {
        if (Object.keys(options.data).length > 0) {

            if (options.method === 'POST') {
                myOptions.data = options.data
            } else {
                myOptions.params = options.data
            }
        }
        if (options.data.constructor === FormData) {
            myOptions.data = options.data
        }
    }

    myOptions.headers['content-type'] = 'application/json'
    return service(myOptions)
}
export default http