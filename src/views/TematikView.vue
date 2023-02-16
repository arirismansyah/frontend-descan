<template>
    <TematikLayout :kode="$route.params.kode"></TematikLayout>
</template>
<script setup lang="ts">
    import TematikLayout from "@/components/layouts/TematikLayout.vue";
</script>
