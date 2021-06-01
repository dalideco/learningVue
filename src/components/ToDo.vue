<template>
    <input type="checkbox" name="check"  :checked="checked" v-on:click="$emit('modify',id)" >
    <span>{{node}}</span>
</template>

<script lang="ts">
import Vue,{ defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name:"ToDo",
    props:{
        node:String, 
        checked: Boolean,
        id:Number
    },
    
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