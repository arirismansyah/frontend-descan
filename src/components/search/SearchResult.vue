<template>
  <div class="card" :to="'/summary/' + kodeWilayah">
    <div class="card-header">
      <ol class="breadcrumb1">
        <li class="breadcrumb-item2 active">
          {{ props.nama_prov }}
        </li>
        <li v-if="props.nama_kab != ''" class="breadcrumb-item2 active">
          {{ props.nama_kab }}
        </li>
        <li v-if="props.nama_kec != ''" class="breadcrumb-item2 active">
          {{ props.nama_kec }}
        </li>
      </ol>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-lg-9 col-md-9">
          <div class="media">
            <img
              class="avatar brround avatar-lg me-3"
              alt="avatra-img"
              src="@/assets/zanex/images/users/18.jpg"
            />
            <div class="media-body">
              <a href="" class="text-default fw-semibold"
                >Nama Wilayah: {{ props.nama }}</a
              >
              <p class="text-muted">Tingkat: {{ labelLevel }}</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <a
            class="btn btn-pill btn-info text-white"
            :href="'/summary/' + kodeWilayah"
          >
            <i class="fe fe-eye"></i>
            Lihat
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
const props = defineProps({
  kode: { type: String },
  nama: { type: String },
  nama_prov: { type: String },
  nama_kab: { type: String },
  nama_kec: { type: String },
});

const labelLevel = computed(() => {
  if (props.kode.substring(7, 10) != "000") return "Desa/Kelurahan";
  else if (props.kode.substring(4, 7) != "000") return "Kecamatan";
  else if (props.kode.substring(2, 4) != "00") return "Kabupaten/Kota";
  else return "Provinsi";
});

const kodeWilayah = computed(() => {
  if (props.kode.substring(7, 10) != "000") return props.kode;
  else if (props.kode.substring(4, 7) != "000")
    return props.kode.substring(0, 7);
  else if (props.kode.substring(2, 4 != "00"))
    return props.kode.substring(0, 4);
  else return props.kode.substring(0, 2);
});
</script>
