<template>
    <input type="checkbox" name="check" id="" :checked="checked" v-on:click="modify">
    <span>{{node}}</span>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props:{
        node:String, 
        checked: Boolean
    },
    methods:{
        modify(event){
            console.log(event.target.checked)
        }
    }
})
</script>

<style scoped>
    *{
        margin-top: 10px;
    }
    input:checked + span {
        text-decoration: line-through;
    }
</style>