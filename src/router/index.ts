import { createRouter, createWebHistory } from "vue-router";
import About from '../components/About.vue';

const routes = [
    {
        path:"/about",
        name:"about",
        component:About
    }
]

const router= createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router