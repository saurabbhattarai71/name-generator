<script>
import { RouterView } from 'vue-router' 
import Navbar from '../src/components/Navbar.vue'
import Herosection from './components/Herosection.vue'; 
import Ourservices from './components/Ourservices.vue';
import Footer from './components/Footer.vue'; 

export default {
  name: 'App',
  components: {
    Navbar,
    Herosection,
    Ourservices,
    Footer,
  }
}
</script>

<template>   
  <Navbar />
  <Herosection /> 
  <Ourservices /> 
  <Footer />
  <RouterView />
</template>

<style scoped>
</style>
