import axios from 'axios';


export const axiosConfig = axios.create({baseURL: process.env.REACT_APP_URL_BACKEND});
axiosConfig.defaults.headers['Content-Type'] = 'application/json';


export const http  = (options) => {
    return axiosConfig(options)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        if(process.env.NODE_ENV !== 'production') console.log(error.message);
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            if(process.env.NODE_ENV == 'production') window.location = '/';
        }
        return null;
    })
}

