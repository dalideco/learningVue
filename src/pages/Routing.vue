<template>
  <nav>
      <h1 v-show="homePage()">hello this is dali</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
      <!-- <router-link href="/other">other</router-link> -->
      
  </nav>
  <div class="page">
  <router-view :msg="msg"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface dataProps{
  msg:string
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

<style scoped>
  a{
    margin: 0 10px;
  }
  .page{
    margin-top: 50px; 
    padding : 30px;
    border: solid 2px black;
    display: inline-block;
  }

</style>