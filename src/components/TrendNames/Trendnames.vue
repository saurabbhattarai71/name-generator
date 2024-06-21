<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-96">
      <div class="mb-4">
        <input
          type="text"
          v-model="name"
          placeholder="Enter your name"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <button
          @click="search"
          class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div class="h-48">
        <Line v-if="loaded" :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "Trendnames",
  components: {
    Line,
  },
  data() {
    return {
      name: '',
      loaded: false,
      chartData: {
        labels: [] as string[],  // hold years//
        datasets: [
          {
            label: 'Trends',
            backgroundColor: '#f87979',
            data: [] as number [], // hold trend values//
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  }, 
  
  methods: {
    async search() { 
      this.loaded = true;
      try {
        const response = await axios.get(
          `http://192.168.1.160/api/v1/names?name=${this.name}`,
          {
            headers: {
              "Content-Type": "application/json",
               "Accept" : "application/json",
            },
          }
        ); 

        console.log("response is:", response.data.data);
        const names = response.data.data;
        let labels: string[] = [];
        let data:  number[] = [];

        names.forEach((nameObj) => {
          nameObj.trends.forEach((value) => {
            labels.push(value.year);
            data.push(parseInt(value.trend));
          });
        });

        // updating component's data //

        // Update Chartdata with dynamic values
        this.chartData.labels = labels;
        this.chartData.datasets[0].data = data;  

        this.loaded = false;

        console.log("charData:", this.chartData);
        console.log("chartOptions:", this.chartOptions);

        console.log("labels:", labels, "data:", data);
      } catch (error) {
        console.log("Error is:", error);
      }
      console.log("searching for names...", this.name);
    }
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
