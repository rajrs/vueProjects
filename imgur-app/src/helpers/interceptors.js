import axios from 'axios';
import store from '../store'

export default function setup() {
    //console.log('interceptors', store.getters.authToken)
    axios.interceptors.request.use(function(config) {
        const token = store.getters.authToken;
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}