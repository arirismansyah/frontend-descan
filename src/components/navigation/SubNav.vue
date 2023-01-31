<template>
  <v-breadcrumbs :items="items" class="bg-blue">
    <template v-slot:prepend>
      <v-icon size="small" icon="mdi-map-search"></v-icon>
    </template>
  </v-breadcrumbs>
</template>
<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    title: "Provinsi:",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Kab/Kota:",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Kecamatan:",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
  {
    title: "Desa:",
    disabled: true,
    href: "breadcrumbs_link_2",
  },
]);
</script>
