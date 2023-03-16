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
              <table>
                <tr>
                  <td class="text-default fw-semibold">Nama Wilayah</td>
                  <td class="text-default fw-semibold px-2">:</td>
                  <td class="text-default fw-semibold">{{ props.nama }}</td>
                </tr>
                <tr>
                  <td class="text-muted">Tingkatan Wilayah</td>
                  <td class="text-muted px-2">:</td>
                  <td class="text-muted">{{ labelLevel }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-pill btn-outline-info"
            @click="toWilayah(kodeWilayah)"
          >
            <i class="fe fe-eye"></i>
            Lihat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRouter, RouterLink, useRoute } from "vue-router";
const router = useRouter();

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
  else if (props.kode.substring(2, 4) != "00")
    return props.kode.substring(0, 4);
  else return props.kode.substring(0, 2);
});

function toWilayah(kodeWilayah: string) {
  router.push({ path: "/monograph/" + kodeWilayah });
}
</script>

<style scoped lang="css" src="@/assets/zanex/css/style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/dark-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/skin-modes.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/transparent-style.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/css/icons.css"></style>
<style scoped lang="css" src="@/assets/zanex/colors/color1.css"></style>
