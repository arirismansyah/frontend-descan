<template>
    <TematikLayout :kode="$route.params.kode as string"></TematikLayout>
</template>
<script setup lang="ts">
    import TematikLayout from "@/components/layouts/TematikLayout.vue";
</script>
