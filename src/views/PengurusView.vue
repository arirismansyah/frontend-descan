<template>
    <PengurusLayout :kode="$route.params.kode as string"></PengurusLayout>
</template>
<script setup lang="ts">
    import PengurusLayout from "@/components/layouts/PengurusLayout.vue";
</script>
