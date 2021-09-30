import Vue from 'vue'
import Router from 'vue-router'
import AuthHandler from '../components/AuthHandler'
import HelloWorld from '../components/HelloWorld'
import ImageList from "../components/ImageList";
import UploadForm from "../components/UploadForm";
Vue.use(Router)
const router = new Router({
    mode:'history',
    routes:[
        { path: '/home', component: ImageList },
        { path: '/upload', component: UploadForm },
        { path: '/oauth2/callback', component: AuthHandler },

        { path: '/', 
        component: HelloWorld,
        props: {
             msg: 'Welcome to Your Vue.js App from props',
             timestamp: new Date().getFullYear() 
             }
        }
    ]
})
export default router