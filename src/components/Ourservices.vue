<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-center text-3xl">Our Services</h2>
  
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
          <a v-for="service in services" :key="service.id" :href="service.href" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img :src="service.imageSrc" :alt="service.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 class="mt-4 text-center text-2xl text-gray-700">{{ service.name }}</h3>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const services = [
    {
      id: 1,
      name: 'Baby Name',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: 'baby_name_generator',
    },
    {
      id: 2,
      name: 'express Name Generator',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'IP name',
      href: '#',
     
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    },   
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    {
      id: 4,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/babyName.jpg',
      imageAlt: '',
    }, 
    

    // More products...
  ]
  </script>