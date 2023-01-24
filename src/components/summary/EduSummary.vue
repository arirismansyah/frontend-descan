<template>
  <v-card>
    <v-card-title>
      <strong>Pendidikan</strong>
    </v-card-title>
    <v-card-subtitle>Nama Wilayah</v-card-subtitle>
    <v-card-text>
      <!-- TREE MAP -->
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Chart } from "chart.js";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";

const config = {
  type: "treemap",
  data: {
    datasets: [
      {
        label: "My treemap dataset",
        tree: [15, 6, 6, 5, 4, 3, 2, 2],
        borderColor: "green",
        borderWidth: 1,
        spacing: 0,
        // backgroundColor: (ctx) => colorFromRaw(ctx),
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "My treemap chart",
      },
      legend: {
        display: false,
      },
    },
  },
};

Chart.register(TreemapController, TreemapElement);
</script>
