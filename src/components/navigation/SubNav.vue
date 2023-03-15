<template>
  <!-- PAGE-HEADER -->
  <div class="row mb-4 mt-4 bg-white">
    <ol class="breadcrumb1">
      <li class="breadcrumb-item2 active">
        <i class="fe fe-map-pin me-1 text-transparant" aria-hidden="true"></i
        >Provinsi: {{}}
      </li>
      <li class="breadcrumb-item2">
        <a href="javascript:void(0);"
          >Kab/Kota: {{ monographStore.indukWilayah[1].nama }}</a
        >
      </li>
      <li class="breadcrumb-item2 active text-muted">
        Kecamatan: {{ monographStore.infoWilayah?.nama_kec }}
      </li>
      <li class="breadcrumb-item2 active text-muted">
        Desa: {{ monographStore.infoWilayah?.nama }}
      </li>
    </ol>
  </div>
  <!-- PAGE-HEADER END -->
</template>
<script setup lang="ts">
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { ref, computed, onMounted } from "vue";

async function loadWilayah() {
  await axios
    .get(`${urlApi}wilayah/${props.kode}/show`)
    .then(({ data }) => {
      monografStore.setWilayah(
        data.datas.result,
        data.datas.info_induk,
        data.datas.info_child
      );
    })
    .catch(({ response }) => {
      console.error(response);
    });
  await axios
    .get(`${urlApi}pengurus/${props.kode}/list`)
    .then(({ data }) => {
      pengurusStore.setPengurus(data.datas.data);
    })
    .catch(({ response }) => {
      console.error(response);
    });
}

onMounted(() => {
  loadWilayah();
});
const monographStore = useMonografWilayahStore();
</script>
