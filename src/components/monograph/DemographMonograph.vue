<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Demografi</h3>
    </div>
    <div class="card-body">
      <p v-if="dummy" class="text-muted">
        Data yang ditampilkan saat ini adalah dummy, karena belum ada data yang
        diinput
      </p>
      <canvas id="demograph-chart"></canvas>
      <div class="row">
        <canvas id="demograph-chart2"></canvas>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject, computed, onMounted } from "vue";
import axios from "axios";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import { Chart } from "chart.js/auto";

import { useDataMonographStore } from "@/stores/dataMonograph";

import LoaderElement from "../navigation/LoaderElement.vue";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");

const kodeWilayahStore = useKodeWilayahStore();
const dataMonographStore = useDataMonographStore();
const dummy = ref(false);

const data = {
  labels: ["Perempuan", "Laki-laki"],
  datasets: [
    {
      label: "Jumlah Penduduk",
      data: [300, 100],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

async function makeChart() {
  const allData = dataMonographStore.$state.datas;
  let pendudukLk = null;
  let pendudukPr = null;

  allData.forEach((element) => {
    if (element["kategori_variabel"] == "jumlah_penduduk") {
      if (element["nama_variabel"].includes("laki")) {
        pendudukLk = parseInt(element["nilai"]);
      } else {
        pendudukPr = parseInt(element["nilai"]);
      }
    }
  });

  console.log("lk", pendudukLk);
  console.log("pr", pendudukPr);

  if (
    isNaN(pendudukLk) ||
    isNaN(pendudukPr) ||
    pendudukLk == null ||
    pendudukPr == null ||
    (pendudukLk <= 0 && pendudukPr <= 0)
  ) {
    pendudukPr = 300;
    pendudukLk = 100;
    dummy.value = true;
  }

  const data = {
    labels: ["Perempuan", "Laki-laki"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [pendudukPr, pendudukLk],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  new Chart(document.getElementById("demograph-chart"), config);
}

onMounted(() => {
  makeChart();
});
</script>
