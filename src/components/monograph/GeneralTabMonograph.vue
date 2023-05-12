<template>
  <LoaderElement v-if="!isLoaded"></LoaderElement>
  <div v-else></div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, inject, computed, onMounted } from "vue";
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import LoaderElement from "../navigation/LoaderElement.vue";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const monographStore = useMonografWilayahStore();
const kodeWilayahStore = useKodeWilayahStore();
const generalData = ref(null);
const props = defineProps({ kode: { type: String } });
console.log(kodeWilayahStore.$state);

async function getMonograph() {
  loadingState.value = "false";
  await axios
    .get(`${urlApi}dashboard/${kodeWilayahStore.$state.kode}/monograph`)
    .then(({ data }) => {
      generalData.value = data.datas;
      loadingState.value = "success";
      console.log(generalData);
    });
}

onMounted(() => {
  getMonograph();
});
</script>
