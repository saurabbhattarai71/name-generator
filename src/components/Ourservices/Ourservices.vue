<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 px-24 mb-6">
    <div v-for="service in services" :key="service.id" class="bg-gray-200 p-6 text-center rounded-lg shadow border border-transparent hover:border-[#0B85F5]">
      <a :href="service.href" class="flex items-center justify-center text-lg font-[poppins] font-bold text-gray-700">
        <img :src="service.imageSrc" :alt="service.imageAlt" class="w-12 h-12"/>
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
      imageSrc: './src/components/icons_service/Baby.png',
      imageAlt: 'baby_name_generator',
    },
    {
      id: 2,
      name: 'Male Names',
      href: '/expressname',
      imageSrc: './src/components/icons_service/Male.png',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'Female Names',
      href: '#',
     
      imageSrc: './src/components/icons_service/FeMale.png',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Nick Names',
      href: '#',
      imageSrc: './src/components/icons_service/Nickname.png',
      imageAlt: '',
    },   
    {
      id: 5,
      name: 'Username',
      href: '#',
      imageSrc: './src/components/icons_service/Username.png',
      imageAlt: '',
    }, 
    {
      id: 6,
      name: 'Phone Number',
      href: '#',
      imageSrc: './src/components/icons_service/Phone Number.png',
      imageAlt: '',
    }, 
    {
      id: 7,
      name: 'Pet Names',
      href: '#',
      imageSrc: './src/components/icons_service/Animal.png',
      imageAlt: '',
    }, 
    {
      id: 8,
      name: 'Ship Names',
      href: '#',
      imageSrc: './src/components/icons_service/Ship.png',
      imageAlt: '',
    }, 
    {
      id: 9,
      name: 'Business Name',
      href: '#',
      imageSrc: './src/components/icons_service/Business.png',
      imageAlt: '',
    },
    {
      id: 10,
      name: 'Address',
      href: '#',
      imageSrc: './src/components/icons_service/Address.png',
      imageAlt: '',
    }, 
    {
      id: 11,
      name: 'Email Address',
      href: '#',
      imageSrc: './src/components/icons_service/Email.png',
      imageAlt: '',
    }, 
    {
      id: 12,
      name: 'Password',
      href: '#',
      imageSrc: './src/components/icons_service/Password.png',
      imageAlt: '',
    },  
    {
      id: 13,
      name: 'Domain Name',
      href: '#',
      imageSrc: './src/components/icons_service/Globe.png',
      imageAlt: '',
    },  
    {
      id: 14,
      name: 'IP Address',
      href: '#',
      imageSrc: './src/components/icons_service/GlobeMarker.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'MAC Address',
      href: '#',
      imageSrc: './src/components/icons_service/MacAddress.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'User Agent',
      href: '#',
      imageSrc: './src/components/icons_service/UserAgent.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'Credit Card',
      href: '#',
      imageSrc: './src/components/icons_service/CreditCard.png',
      imageAlt: '',
    }, 
    {
      id: 14,
      name: 'IBAN Number',
      href: '#',
      imageSrc: './src/components/icons_service/IBAN.png',
      imageAlt: '',
    },  
    {
      id: 14,
      name: 'UUID',
      href: '#',
      imageSrc: './src/components/icons_service/UUID.png',
      imageAlt: '',
    }, 
    

    // More products...
  ]
  </script>