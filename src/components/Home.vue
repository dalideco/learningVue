<template>
  <div>this is the home page</div>
  <p class="my-para">this is a message : {{msg}} </p>
  <button v-on:click="changeColor">change color</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name:"home",
    props:{
        msg:String
    },
    methods:{
        changeColor(event:any){
            event.target.style.background='red'
            const myPara:any = document.querySelector(".my-para");
            myPara.style.background="green";
        }
    }
})
</script>

<style scoped>
    .my-para{
        color: blue;
    }
</style>