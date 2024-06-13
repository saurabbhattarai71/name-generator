<script>
import { RouterView } from 'vue-router';
import Navbar from '../components/Navbar/Navbar.vue';
import Herosection from '../components/Herosection/Herosection.vue'; 
import Ourservices from '../components/Ourservices/Ourservices.vue';
import Footer from '../components/Footer/Footer.vue'; 

export default {
  name: 'Home',
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
