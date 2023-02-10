<template>
    <SearchLayout :keyword="this.$route.query.keyword"></SearchLayout>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import SearchLayout from "@/components/layouts/SearchLayout.vue";
</script>
