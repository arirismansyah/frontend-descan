<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Pendidikan</h3>
    </div>
    <div class="card-body">
      <canvas id="edu-chart"></canvas>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject, computed, onMounted } from "vue";
import axios from "axios";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import { Chart } from "chart.js";

import { TreemapController, TreemapElement } from "chartjs-chart-treemap";

Chart.register(TreemapController, TreemapElement);

const data = [
  { category: "main", subcategory: "one", value: 1 },
  { category: "main", subcategory: "one", value: 5 },
  { category: "main", subcategory: "one", value: 3 },
  { category: "main", subcategory: "two", value: 2 },
  { category: "main", subcategory: "two", value: 1 },
  { category: "main", subcategory: "two", value: 8 },
  { category: "other", subcategory: "one", value: 4 },
  { category: "other", subcategory: "one", value: 5 },
  { category: "other", subcategory: "two", value: 4 },
  { category: "other", subcategory: "two", value: 1 },
];
const config = {
  type: "treemap",
  data: {
    datasets: [
      {
        tree: data,
        key: "value",
        groups: ["category", "subcategory", "value"],
        captions: {
          display: true,
          formatter(ctx) {
            return ctx.type === "data" ? "G: " + ctx.raw.g : "";
          },
        },
      },
    ],
  },
};

onMounted(() => {
  new Chart(document.getElementById("edu-chart"), config);
});
</script>
