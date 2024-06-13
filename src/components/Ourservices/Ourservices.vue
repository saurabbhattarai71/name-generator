<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-24 mb-6">
    <div v-for="service in services" :key="service.id" class="bg-gray-200 p-6 text-center rounded-lg shadow border border-transparent hover:border-[#ff8f0b]">
      <a :href="service.href" class="flex items-center justify-center text-lg font-[inter] text-gray-700">
        <img :src="service.imageSrc" :alt="service.imageAlt" class="w-6 h-6"/>
        <span class="ml-2 w-full justify-between">{{ service.name }}</span>
      </a>
    </div>
  </div>
</template>
  
  <script setup>
  const services = [
    {
      id: 1,
      name: 'Baby Names',
      href: '/babyname',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: 'baby_name_generator',
    },
    {
      id: 2,
      name: 'Male Names',
      href: '/expressname',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'Female Names',
      href: '#',
     
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Nick Names',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },   
    {
      id: 5,
      name: 'Username',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 6,
      name: 'Phone Number',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 7,
      name: 'Pet Names',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 8,
      name: 'Ship Names',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 9,
      name: 'Business Name',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },
    {
      id: 10,
      name: 'Address',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 11,
      name: 'Email Address',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 12,
      name: 'Password',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },  
    {
      id: 13,
      name: 'Domain Name',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },  
    {
      id: 14,
      name: 'IP Address',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'User Agent',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'Credit Card',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'IBAN Number',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    },  
    {
      id: 14,
      name: 'UUID',
      href: '#',
      imageSrc: './src/components/TeenyiconsAddressBookSolid.png',
      imageAlt: '',
    }, 
    

    // More products...
  ]
  </script>