import { createRouter,createWebHistory } from 'vue-router' 
import Home from '../views/Home.vue'
import BabyNameService from '../views/BabyNameService.vue';
import TrendName from '../views/TrendName.vue';


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
  },
   
  {
  path : '/trends',
  name :' TrendName',
  component : TrendName,
  },
] 


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;