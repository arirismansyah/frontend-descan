<template>
  <v-card elevation="8">
    <v-card-title>
      <strong>Demografi</strong>
    </v-card-title>
    <v-card-subtitle>Nama Wilayah</v-card-subtitle>
    <v-card-text>
      <Doughnut :data="data" :config="config" />
      <canvas style="height: 500px" id="barChart"></canvas>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  Colors,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "vue-chartjs";
import { ref, onMounted } from "vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Colors
);
const DATA_COUNT_BAR = 7;
const NUMBER_CFG = { count: DATA_COUNT_BAR, min: -100, max: 100 };

const labels = ["Pria", "Wanita"];
const data_bar = {
  labels: labels,
  datasets: [
    {
      label: "Usia 0-17 Tahun",
      data: [32, 13],
      // backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: "Usia 18-65 Tahun",
      data: [14, 25],
      // backgroundColor: Utils.CHART_COLORS.blue,
    },
    {
      label: "Usia > 65 Tahun",
      data: [50, 10],
      // backgroundColor: Utils.CHART_COLORS.green,
    },
  ],
};

const config_bar = {
  type: "bar",
  data: data_bar,
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

onMounted(() => {
  const myChart = new ChartJS(document.getElementById("barChart"), config_bar);
});
const DATA_COUNT = 5;

const data = {
  labels: ["Pria", "Wanita"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1249, 1120],
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  },
};
</script>
