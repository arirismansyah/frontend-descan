<template>
    <UmkmLayout :kode="$route.params.kode as string"></UmkmLayout>
</template>
<script setup lang="ts">
    import UmkmLayout from "@/components/layouts/UmkmLayout.vue";
</script>
