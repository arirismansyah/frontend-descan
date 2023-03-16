<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Profile</h3>
    </div>
    <div class="card-body">
      <!-- PROFILE ELEMENTS -->
      <div class="row justify-content-center">
        <div class="col col-auto">
          <div
            class="counter-icon h-18 w-18 bg-info-gradient box-shadow-primary brround ms-auto"
          >
            <!-- LOGO WILAYAH -->
          </div>
        </div>
      </div>

      <div class="row mt-2">
        <div class="expanel expanel-default">
          <div class="expanel-body">
            <tr v-for="wilayah in infoWilayah" :key="wilayah.level">
              <td class="text-muted">{{ wilayah.level }}</td>
              <td class="px-2">:</td>
              <td>{{ wilayah.nama }}</td>
            </tr>
          </div>
        </div>
        <table></table>
      </div>

      <!-- PROFILE ELEMENTS -->
    </div>
  </div>
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
