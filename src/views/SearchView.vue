<template>
    <SearchLayout :keyword="$route.query.keyword as string"></SearchLayout>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import SearchLayout from "@/components/layouts/SearchLayout.vue";
</script>
