<template>
  <TematikLayout
    v-if="$route.params.kode != null"
    :kode="$route.params.kode as string"
  ></TematikLayout>
  <TematikLayout v-else :kode="16"></TematikLayout>
</template>
<script setup lang="ts">
import TematikLayout from "@/components/layouts/TematikLayout.vue";
</script>
