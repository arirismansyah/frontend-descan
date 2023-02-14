<template>
    <SummaryLayout :kode="$route.params.kode"></SummaryLayout>
</template>
<script setup lang="ts">
  	import { onMounted  } from "vue";
    import SummaryLayout from "@/components/layouts/SummaryLayout.vue";
</script>
