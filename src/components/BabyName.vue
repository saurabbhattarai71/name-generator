<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-100 p-4">
    <div class="flex items-center">
      <img
        src="./TeenyiconsAddressBookSolid.png"
        alt="Baby Image"
        class="w-24 h-24 rounded-full"
      />
      <div class="ml-4">
        <h1 class="text-3xl font-bold">Baby Name Generator</h1>
        <p class="text-gray-600">
          Explore a vast range of baby names with our tool. Select the gender,
          hit the button and delve into the world of beautiful names.
        </p>
      </div>
    </div>
    <div class="flex items-center space-x-2 mt-4">
      <label for="gender" class="flex items-center"></label>
      <select id="gender" class="p-2 border rounded-lg px-16">
        <option value="" disabled selected>Choose the gender</option>
        <option value="Girl">Girl</option>
        <option value="Boy">Boy</option>
      </select>
      <button
        class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32"
      >
        <div
          class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100"
        >
          Generate
        </div>
        <div class="absolute right-3.5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
    <div class="p-4 w-full flex">
      <div class="w-1/2 p-2">
        <div class="space-y-6">
          <div
            v-for="(Babyname, index) in leftNames"
            :key="index"
            class="flex items-center justify-between px-12 py-4 bg-white shadow rounded-lg"
          >
            <div class="flex items-center w-full justify-between">
              <div>
                <span class="font-semibold font-[poppins] text-sm">{{
                  Babyname.name
                }}</span>
                - {{ Babyname.description }} [{{ Babyname.origin }}]
              </div>
              <div class="flex items-center space-x-2 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-7 w-7 font-bold hover:bg-black hover:text-white rounded-full p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  @click="copyToClipboard(Babyname)"
                  style="cursor: pointer"
                >
                  <path
                    fill="currentColor"
                    d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.18C11.6 1.84 12.7 1 14 1s2.4.84 2.82 2zm-6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-4 4V5H8v12h12V5h-2v2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 p-2">
        <div class="space-y-6">
          <div
            v-for="(Babyname, index) in leftNames"
            :key="index"
            class="flex items-center justify-between px-12 py-4 bg-white shadow rounded-lg"
          >
            <div class="flex items-center w-full justify-between">
              <div>
                <span class="font-semibold font-[poppins] text-sm">{{
                  Babyname.name
                }}</span>
                - {{ Babyname.description }} [{{ Babyname.origin }}]
              </div>
              <div class="flex items-center space-x-2 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  @click="saveName(Babyname)"
                  stroke="currentColor"
                  class="h-7 w-7 font-bold hover:bg-black hover:text-white rounded-full p-1" 
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  @click="copyToClipboard(Babyname)"
                  style="cursor: pointer"
                >
                  <path
                    fill="currentColor"
                    d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.18C11.6 1.84 12.7 1 14 1s2.4.84 2.82 2zm-6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-4 4V5H8v12h12V5h-2v2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
    >
      <div
        class="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"
      ></div>
      <span class="relative text-black group-hover:text-white"
        >Generate More</span
      >
    </button>
  </div>
</template>

<script> 
import eventBus from './EventHandler/eventBus.js';
export default {
  name: "BabyName",

  data() {
    return {
      names: [
        { name: "Renzo", description: "Man from Laurentum", origin: "Latin" },
        {
          name: "Richard",
          description: "Strong power; hardy power",
          origin: "French",
        },
        {
          name: "Trent",
          description: "Traveller; journey across",
          origin: "English",
        },
        { name: "Khalil",
         description: "Honorable comrade",
          origin: "Arabic" }, 


        { name: "Kevin", description: "Beautiful at birth", origin: "Gaelic" },
        { name: "Kirkland", description: "Church land", origin: "English" },
        { name: "Franklin", description: "Free man", origin: "English" },
        {
          name: "Bryant",
          description: "Noble, strong, virtuous",
          origin: "Gaelic",
        },
      ],
    };
  },

  methods: {
    copyToClipboard(babyName) {
      let textToCopy = `Name: ${babyName.name}\nDescription: ${babyName.description}\nOrigin: ${babyName.origin}`;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Copied to clipboard!");
        })
        .catch((err) => {
          console.log("Failed to copy: ", err);
          alert("Failed to copy!");
        });
    }, 

    saveName(babyName) {
  // Construct the savedNames variable with the babyName
  let savedNames = `${babyName.name}`;
  console.log("This is saved Names: ", savedNames);
  
  // Retrieve the existing saved names from local storage or initialize an empty array if none exist
  let savedNamesArray = JSON.parse(localStorage.getItem('savedNames')) || []; 
  
  // Check if savedNamesArray is indeed an array
  if (!Array.isArray(savedNamesArray)) {
    savedNamesArray = []; 
  } 

  if (savedNamesArray.includes(savedNames)) {
    alert('Name already saved!');
    return;
  }
  
  // Add the new name to the array
  savedNamesArray.push(savedNames);
  
  // Save the updated array back to local storage
  localStorage.setItem('savedNames', JSON.stringify(savedNamesArray));
  
  // Emit an event to notify parent or other components
  eventBus.emit('name-saved', savedNamesArray);
  
  // Alert the user that the name has been saved
  alert('Name saved!');  

  // Clear the input field
  this.name = '';
}
  },
  computed: {
    leftNames() {
      return this.names.slice(0, Math.ceil(this.names.length / 2));
    },
    rightNames() {
      return this.names.slice(Math.ceil(this.names.length / 2));
    },

    
    
  },
};
</script>