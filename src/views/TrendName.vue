<script>
import { RouterView } from 'vue-router' 
import Navbar from '../components/Navbar/Navbar.vue'
import Trendnames from '../components/TrendNames/Trendnames.vue';

export default {
  name: 'TrendName',
  components: {
    Navbar,
    Trendnames,
   
    
  }
}
</script>

<template>   

<Navbar />  
<Trendnames />

<RouterView />
</template>

<style scoped>
</style>
