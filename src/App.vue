<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- <ToDoList/> -->
  <Routing/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ToDoList from './pages/ToDoList.vue';
import Routing from './pages/Routing.vue';


export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ToDoList,
    Routing
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
</style>
