<template>
  <!-- PAGE-HEADER -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Monograph</h1>
      <tr>
        <td>
          <strong class="text-muted">
            {{ monographStore.labelWilayah.current }}
          </strong>
        </td>
        <td class="px-2">:</td>
        <td>
          <strong class="text-muted">
            {{ monographStore.infoWilayah?.nama }}
          </strong>
        </td>
      </tr>
    </div>
    <div class="ms-auto pageheader-btn">
      <a
        href="javascript:void(0);"
        class="btn btn-primary btn-icon text-white me-2"
      >
        <span>
          <i class="fa fa-print"></i>
        </span>
        Cetak Monograph
      </a>
    </div>
  </div>
  <!-- PAGE-HEADER END -->
</template>
<script setup lang="ts">
import { useMonografWilayahStore } from "@/stores/monografWilayah";
const monographStore = useMonografWilayahStore();
</script>

<style scoped lang="css" src="@/assets/zanex/css/style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/dark-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/skin-modes.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/transparent-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/colors/color1.css"></style>
