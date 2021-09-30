
import qs from 'qs';
import axios from 'axios';
console.log('process env',process.env)
console.log('process env',process.env.VUE_APP_CLIENT_ID)
const CLIENT_ID= process.env.VUE_APP_CLIENT_ID
const ROOT_URL='https://api.imgur.com';

export default {
    login(){
         console.log('init')
        const queryString= {
            client_id :CLIENT_ID,
            response_type :'token'
        }
        window.location =  `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
    },
    fetchImages(){
        return axios.get(`${ROOT_URL}/3/account/me/images`)
    },
    uploadImages(images){
       let allUpload =  Array.from(images).map( (image)=> {
            let formData= new FormData();
            formData.append('image',image)
        return axios.post(`${ROOT_URL}/3/image`,formData)
        });
        return Promise.all(allUpload)
    },
    deleteImage(imageHash){
        console.log(imageHash)
        return axios.delete(`${ROOT_URL}/3/image/${imageHash}`)
    }
}