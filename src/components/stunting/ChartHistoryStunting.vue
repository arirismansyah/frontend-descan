<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Jumlah Stunting & Potensi Stunting by Years</h3>
    </div>
    <div class="card-body">
      <LoaderElement v-if="!isLoaded"></LoaderElement>

      <div v-if="isDummy" class="row">
        <p class="text-muted">
          Data yang ditampilkan merupakan <strong>data dummy</strong> karena
          data belum tersedia
        </p>
      </div>
      <canvas id="history-chart"></canvas>
    </div>
  </div>
</template>
<script setup lang="ts">
// import modules
import axios from "axios";
import { ref, inject, computed, onMounted, reactive } from "vue";
import { Chart } from "chart.js";

// import stores
import { useKodeWilayahStore } from "@/stores/kodeWilayah";

// import components
import LoaderElement from "../navigation/LoaderElement.vue";

const loadingState = ref("false");
const isDummy = ref(false);
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");

const kodeWilayahStore = useKodeWilayahStore();

async function makeDummyChart() {
  loadingState.value = "success";
  isDummy.value = true;
  const data = {
    labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
    datasets: [
      {
        label: "Jumlah Stunting & Potensi Stunting",
        data: [20, 15, 23, 18, 22, 12],
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
        },
      },
    },
  };

  new Chart(document.getElementById("history-chart"), config);
}

onMounted(() => {
  makeDummyChart();
});
</script>
