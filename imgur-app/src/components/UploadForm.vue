
<template>
<div>
<h3>upload Image</h3>
  <div class="dropple">
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*"/>
      <span>UploadFrom</span>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name:'UploadForm',
methods:mapActions(['uploadImages'])
}
</script>

<style scoped>
.dropple{
  height:30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px  dashed;
  border-radius: 5px;


}
.dropple input{
  width:100%;
  height:30vh;
  position: absolute;
  opacity: 0;
  
}

</style>