<template>
    <StuntingLayout :kode="$route.params.kode as string"></StuntingLayout>
</template>
<script setup lang="ts">
    import StuntingLayout from "@/components/layouts/StuntingLayout.vue";
</script>
