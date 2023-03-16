<template>
  <MonographLayout :kode="$route.params.kode as string"></MonographLayout>
</template>

<script setup lang="ts">
import MonographLayout from "@/components/layouts/MonographLayout.vue";
</script>
