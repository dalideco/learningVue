<template>
    <input type="checkbox" name="check"  :checked="checked" v-on:click="modifying" >
    <span>{{node}}</span>
</template>

<script lang="ts">
import Vue,{ defineComponent } from 'vue';

export default defineComponent({
    name:"ToDo",
    props:{
        node:String, 
        checked: Boolean,
        id:Number,
        modify:{
            type:Function
        }
    },
    methods:{
        modifying():void{
            if(this.modify) this.modify(this.id);
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