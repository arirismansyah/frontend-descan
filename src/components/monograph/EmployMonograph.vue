<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Ketenagakerjaan</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <p class="text-muted">
          Data yang ditampilkan merupakan <strong>data dummy</strong> karena
          data belum tersedia
        </p>
      </div>
      <div class="row">
        <canvas id="employ-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject, computed, onMounted } from "vue";
import axios from "axios";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import { Chart } from "chart.js";

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ["a", "s", "d", "f", "g", "h", "j"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 34, 14, 21, 54, 65],
      // backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: "Dataset 2",
      data: [34, 12, 22, 34, 65, 32, 12],
      // backgroundColor: Utils.CHART_COLORS.blue,
    },
    {
      label: "Dataset 3",
      data: [12, 34, 14, 21, 54, 65],
      // backgroundColor: Utils.CHART_COLORS.green,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
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
  new Chart(document.getElementById("employ-chart"), config);
});
</script>
