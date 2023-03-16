<template>
  <!-- PAGE-HEADER -->
  <div class="row mb-4 mt-4 bg-white">
    <ol class="breadcrumb2">
      <li class="breadcrumb-item2 active">
        <i class="fe fe-map-pin me-1 text-transparant" aria-hidden="true"></i>
      </li>
      <li
        v-for="wilayah in infoWilayah"
        :key="wilayah.level"
        class="breadcrumb-item2 active"
      >
        {{ wilayah.level }}: {{ wilayah.nama }}
      </li>
    </ol>
  </div>
  <!-- PAGE-HEADER END -->
</template>
<script setup lang="ts">
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { ref, computed, onMounted } from "vue";

const monographStore = useMonografWilayahStore();

const infoWilayah = computed(() => {
  let result = [];
  for (let index = 0; index < monographStore.indukWilayah.length; index++) {
    let level = "";
    switch (index) {
      case 0:
        level = "Provinsi";
        break;
      case 1:
        level = "Kab/Kota";
        break;
      case 2:
        level = "Kecamatan";
        break;
      case 3:
        level = "Desa/Kelurahan";
        break;

      default:
        level = "Provinsi";
        break;
    }
    const nama_wilayah = monographStore.indukWilayah[index].nama;
    result.push({ level: level, nama: nama_wilayah });
  }
  if (monographStore.infoWilayah != null) {
    result.push({
      level: monographStore.labelWilayah.current,
      nama: monographStore.infoWilayah.nama,
    });
  }
  return result;
});
</script>

<style scoped lang="css" src="@/assets/zanex/css/style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/dark-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/skin-modes.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/transparent-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/colors/color1.css"></style>
