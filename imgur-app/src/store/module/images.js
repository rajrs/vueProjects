import api from '../../api/imgur'
import router from '../../router'
const state={
    images:[]
}
const getters={
    allImages: state => state.images
}
const actions= {
    fetchImages({commit}){
         api.fetchImages().then((resp) =>{
            let dataObj = resp.data.data
            if(dataObj.length >0 && resp.data.status === 200 ){
                commit('setImages',dataObj)
            }
         }).catch(e =>console.log(e)) 
    },
     uploadImages({commit},images){
         console.log(commit)
        api.uploadImages(images).then(response=>{ 
            console.log(response)
            router.push('/home')
        }).catch(e=> console.log('api.uploadImages',e))
        //api.uploadImages(token,payload).then(response=>{ console.log(response)}).catch(e=> console.log(e))
    },
    deleteImage(param,imageHash){
        console.log(param)
        const {dispatch}= param;
        console.log('from deleteimg action',imageHash)
        api.deleteImage(imageHash).then(response=>{ 
            console.log(response)
            dispatch('fetchImages', { root: true })
              //dispatch('fetchImages',{}, { root: true })
        }).catch(e=> console.log('api.uploadImages',e))
       
    }
}
const  mutations={
    setImages: (state,payload)=>{
        state.images= payload
    }
} 
export default {state,getters,mutations,actions}