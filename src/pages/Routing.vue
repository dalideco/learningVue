<template>
  <nav>
      <h1>hello this is dali</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
      <!-- <router-link href="/other">other</router-link> -->
      
  </nav>
  <div class="page">
  <router-view></router-view>
  </div>
</template>

<script>
export default {

}
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