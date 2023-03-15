<template>
  <!-- PAGE-HEADER -->
  <div class="page-header mt-0 mb-2">
    <div>
      <h1 class="page-title">Summary</h1>
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
        Cetak Summary
      </a>
    </div>
  </div>
  <!-- PAGE-HEADER END -->
</template>
<script setup lang="ts">
import { useMonografWilayahStore } from "@/stores/monografWilayah";

const monographStore = useMonografWilayahStore();
</script>
