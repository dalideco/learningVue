<template>
  <h1>this is a todo list</h1>

  <form v-on:submit.prevent="add()">
    <input name="node" type="text" v-model="text" />
    <button type="submit">Add</button>
  </form>
  <button v-on:click="refresh()">refresh</button>

  <div v-for="todo in todos" :key="todo.id">
    <ToDo :node="todo.node" :checked="todo.checked" :id="todo.id" @modify="modify" />
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import ToDo from "../components/ToDo.vue";

interface dataI {
  text: String;
  todos: {
     id: Number,
     node: String,
     checked: Boolean
   }[],
  nbr: number
}

export default defineComponent({
  name: "ToDoList",
  components: {
    ToDo,
  },
  data(): dataI {
    return {
      todos: [],
      text: "",
      nbr: 3,
    };
  },
  methods: {
    add():void {
      this.todos = [
        ...this.todos,
        {
          id: this.nbr,
          node: this.text,
          checked: false,
        },
      ];
      this.nbr++;
    },
    refresh():void {
      this.todos = this.todos.filter((todo) => !todo.checked);
    },
    modify(id:Number):void{
      this.todos= this.todos.map(todo=>{
        return (todo.id ===id)? {...todo, checked: !todo.checked}: todo;
      });
      console.log(this.todos);
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