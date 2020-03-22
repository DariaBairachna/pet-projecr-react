import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

// axiosInstance.interceptors.request.use(
//     request => requestHandler(request)
// )

axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

const successHandler = (response: any) => {
    return response;
}

const errorHandler = (response: any) => {
    alert('API ERROR');
}

export default axiosInstance;