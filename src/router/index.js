import { createRouter,createWebHistory } from 'vue-router' 
import Home from '../views/Home.vue'
import BabyNameService from '../views/BabyNameService.vue';


const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home,
  }, 
  { 
  path : '/babyname',  
  name: 'BabyName',
  component: BabyNameService,
  } 
] 


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;