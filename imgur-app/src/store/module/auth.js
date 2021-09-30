import api from '../../api/imgur'
import qs from 'qs'
import router from '../../router'
const state = {
    token:window.localStorage.getItem('imgur_token')
}
const getters = {
 isLoggedIn: state => !!state.token,
 authToken:state => state.token
}

const actions = {
    login:()=>{
        api.login()
    },
    finalizeLogin({commit},hash){
        const result = qs.parse(hash.slice(1,-1))
        commit('setToken',result.access_token) 
        window.localStorage.setItem('imgur_token', result.access_token)
        router.push('/home')
    },
    logout: ({commit}) =>{
         commit('setToken',null) 
         window.localStorage.removeItem('imgur_token')
         router.push('/')
    }

}
const mutations = {
 setToken:( state, token)=>{ 
     state.token = token;
 }
}
export default {state,getters,mutations,actions}