<template>
  <div :id="props.index" class="col d-flex align-items-stretch">
    <div class="card bg-primary img-card box-primary-shadow">
      <div class="card-body">
        <div class="d-flex">
          <div class="text-white">
            <h2 v-if="props.nilai != null" class="mb-0 number-font">
              {{ props.nilai }}
            </h2>
            <h6 v-else class="mb-0">Belum ada data</h6>
            <p class="text-white mb-0">{{ props.nama_variable }}</p>
          </div>
          <div class="ms-auto">
            <i
              v-if="props.kategori_variable == 'jumlah_infrastruktur_kesehatan'"
              class="fa fa-hospital-o text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="
                props.kategori_variable == 'jumlah_infrastruktur_pendidikan'
              "
              class="fa fa-graduation-cap text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="props.kategori_variable == 'jumlah_infrastruktur_ekonomi'"
              class="fa fa-shopping-basket text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="props.kategori_variable == 'jumlah_infrastruktur_ibadah'"
              class="fa fa-building text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="props.kategori_custom?.includes('transportasi')"
              class="fa fa-bus text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="props.kategori_custom?.includes('infokom')"
              class="fa fa-feed text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="props.kategori_custom?.includes('olahraga')"
              class="fa fa-futbol-o text-white fs-30 me-2 mt-2"
            ></i>
            <i
              v-if="props.kategori_custom?.includes('pemerintahan')"
              class="fa fa-bank text-white fs-30 me-2 mt-2"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100" v-if="(props.index + 1) % 2 == 0"></div>
</template>
<script setup lang="ts">
const props = defineProps({
  nama_variable: { type: String },
  nilai: { type: Number },
  deskripsi_variable: { type: String },
  kategori_variable: { type: String },
  index: { type: Number },
  kategori_custom: { type: String },
});
</script>
