<template>
  <h1 :class="seen?'msg':'msg hello'">{{msg}}</h1>
  <button v-on:click="show()">remove</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data:()=>{
    return {
      seen: true
    }
  },
  methods:{
    show(){
      this.seen = ! this.seen;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg{
    transition: opacity 300ms ease-in-out;
  }
  .hello{
    opacity: 0
  }
</style>
