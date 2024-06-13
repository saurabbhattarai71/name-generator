<script>
import { RouterView } from 'vue-router' 
import Navbar from '../components/Navbar/Navbar.vue'
import BabyName from '../components/BabyName.vue';

export default {
  name: 'BabyNameService',
  components: {
    Navbar,
    BabyName
    
  }
}
</script>

<template>   
  <Navbar />  
  <BabyName /> 

  <RouterView />
</template>

<style scoped>
</style>
