<template>
    <div class="ui secondary pointing menu App-header ">
        <a href="/" class="active item">    Image Storage</a>
        <div class="right-menu">
            <a href="#" class="ui item" @click="login" v-if='!isLoggedIn'>Login </a>
            <div class=""  v-else>
                <router-link to="/home" class="ui item" >Gallery</router-link>
                <router-link to="/upload" class="ui item">Upload</router-link>
                <a href="#" class="ui item" @click="logout">Logout </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'

export default {
    name:'AppHeader',
    computed:{
        ...mapGetters(['isLoggedIn'])
        },
    methods:{
        ...mapActions(['login','logout'])
    }
}
</script>
<style>
.App-header.menu{
    display: block;
    width: 100%;
    color:white;
    background: black;
    position: relative;
    padding:10px
}
.menu a{
    color:white;    
    text-decoration:none;
    padding: 8px 15px 5px;
    border-bottom:3 px solid transparent
}
.menu a.router-link-active{
    border-bottom:3px solid #ffc800
}
.menu .right-menu{float: right;
}
</style>
