<template>
  <h1>this is a todo list</h1>

  <form  v-on:submit.prevent="add()">
      <input name="node" type="text" v-model="text">
      <button type="submit">Add</button>
  </form>
  <button v-on:click="refresh()">refresh</button>


  <div v-for="todo in todos" :key="todo.id">
    <ToDo :node="todo.node" :checked="todo.checked" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ToDo from '../components/ToDo'

const todos = [
  {
    id: 0,
    node: "take out the trash",
    checked: false,
  },
  {
    id: 1,
    node: "do homework",
    checked: true,
  },
];

export default defineComponent({
  name: "ToDoList",
  components:{
      ToDo
  },
  data() {
    return {
        todos:[],
        text: ''
    }
  },
  methods:{
      add(){
          this.todos= [...this.todos, {
              id: this.todos.length,
              node: this.text,
              checked:false
          }]
      },
      refresh(){
          this.todos= this.todos.filter(todo=> !todo.checked)
      }
  },
  created() {
    this.todos = [
      {
        id: 0,
        node: "take out the trash",
        checked: false,
      },
      {
        id: 1,
        node: "do homework",
        checked: true,
      },
    ];
  },
});
</script>

<style>
</style>