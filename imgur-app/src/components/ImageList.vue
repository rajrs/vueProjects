
<template>
  <div >
      <p>imageList {{allImages.length}}</p>
      <div class="images-list-holder" v-if="allImages.length">
        <div class="img-block" v-for="image in allImages" :key="image.id">
          <div class="img-title">{{image.id}}</div>
          <div class="delete-img" @click="deleteImage(image.deletehash)">Delete</div>
        </div>
      </div>
      <div class="no-image" v-else>No images available</div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
name:'ImageList',
    methods:{
        ...mapActions(['fetchImages','deleteImage'])
    },
    computed:{
      ...mapGetters(['allImages'])
    },
    created(){
      this.fetchImages();
    }
}
</script>

<style scoped>
.images-list-holder{
  display:grid;
  grid-template-columns: calc(50% - 15px) calc(50% - 15px);
  grid-template-rows: 70px 70px; 
    gap: 15px;
  padding-left: 15px;
  }
.img-block{
  border:1px solid grey;
  min-height: 70px;
}


</style>