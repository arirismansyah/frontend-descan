<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Pendidikan</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <p class="text-muted">
          Data yang ditampilkan merupakan <strong>data dummy</strong> karena
          data belum tersedia
        </p>
      </div>
      <div class="row">
        <canvas id="edu-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import modules
import { ref, inject, computed, onMounted } from "vue";
import axios from "axios";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import { Chart } from "chart.js";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
Chart.register(TreemapController, TreemapElement);

const data = [
  { level: "Tidak Lulus SD", value: 1 },
  { level: "SD", value: 5 },
  { level: "SMP", value: 3 },
  { level: "SMA", value: 2 },
  { level: "S1", value: 1 },
  { level: "S2", value: 8 },
  { level: "S3", value: 4 },
];
const config = {
  type: "treemap",
  data: {
    datasets: [
      {
        tree: data,
        key: "value",
        groups: ["level", "value"],
        captions: {
          display: true,
        },
      },
    ],
  },
};

onMounted(() => {
  new Chart(document.getElementById("edu-chart"), config);
});
</script>
