<template>
  <h1>this is dali deco</h1>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <ToDoList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ToDoList from './pages/ToDoList.vue';


export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ToDoList
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
