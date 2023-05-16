<template>
  <!-- PAGE-HEADER -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Kemiskinan</h1>
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
          <i class="fe fe-plus"></i>
        </span>
        Add Account
      </a>
    </div>
  </div>
  <!-- PAGE-HEADER END -->

  <!-- BANNER JUMLAH KELUARGA MISKIN -->
  <div class="row">
    <div class="col">
      <div class="card bg-danger img-card box-primary-shadow">
        <div class="card-body">
          <div class="d-flex">
            <div class="text-white">
              <h2 class="mb-0 number-font">23,536</h2>
              <p class="text-white mb-0">Keluarga Sangat Miskin</p>
            </div>
            <div class="ms-auto">
              <i class="fa fa-group text-white fs-30 me-2 mt-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
    <div class="col">
      <div class="card bg-secondary img-card box-secondary-shadow">
        <div class="card-body">
          <div class="d-flex">
            <div class="text-white">
              <h2 class="mb-0 number-font">45,789</h2>
              <p class="text-white mb-0">Keluarga Miskin</p>
            </div>
            <div class="ms-auto">
              <i class="fa fa-group text-white fs-30 me-2 mt-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
    <div class="col">
      <div class="card bg-success img-card box-success-shadow">
        <div class="card-body">
          <div class="d-flex">
            <div class="text-white">
              <h2 class="mb-0 number-font">89,786</h2>
              <p class="text-white mb-0">Keluarga Tidak Miskin</p>
            </div>
            <div class="ms-auto">
              <i class="fa fa-group text-white fs-30 me-2 mt-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
  </div>
</template>

<script setup lang="ts">
import { useMonografWilayahStore } from "@/stores/monografWilayah";
const monographStore = useMonografWilayahStore();
</script>
