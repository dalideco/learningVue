<template>
  <nav>
      <h1 >hello this is dali</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
      <!-- <router-link href="/other">other</router-link> -->
      
  </nav>
  
  
    <router-view v-slot="{ Component }" :msg="msg">
      <transition name="view" mode="out-in">
        
          <component :is="Component" />
        
      </transition>
    </router-view>
  
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface dataProps{
  msg:String
}

export default defineComponent({
  name:"Routing",
  data():dataProps{return{
    msg:"hello this is dali"
  }},
  methods:{
    homePage():boolean{
      return this.$route.path==="/"
    }
  }
})
</script>

<style>
  a{
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
  }
  .page{
    margin-top: 50px; 
    padding : 30px;
    border: solid 2px black;
    display: inline-block;
    position: relative;
  }
  a.router-link-active{
    border-bottom: 2px solid black;
    animation : showLine 300ms ease-in-out; 
  }
  @keyframes showLine{
    0%{
      border-color: transparent;
    }
  }
  .view-enter-from,.view-leave-to{
    transform: scaleY(0)
  }
  .view-enter-active, .view-leave-active{
    transition: transform .3s ease-in-out;
  }
</style>