<template>
    <SummaryLayout :kode="$route.params.kode as string"></SummaryLayout>
</template>

<script setup lang="ts">
    import SummaryLayout from "@/components/layouts/SummaryLayout.vue";
</script>
