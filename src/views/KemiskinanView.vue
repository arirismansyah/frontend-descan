<template>
    <KemiskinanLayout :kode="$route.params.kode as string"></KemiskinanLayout>
</template>
<script setup lang="ts">
    import KemiskinanLayout from "@/components/layouts/KemiskinanLayout.vue";
</script>
