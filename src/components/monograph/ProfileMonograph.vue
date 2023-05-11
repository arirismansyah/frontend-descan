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
            class="h-19 w-19 bg-info-gradient box-shadow-primary brround ms-auto justify-content-center align-items-center d-flex"
          >
            <!-- LOGO WILAYAH -->
            <figure class="img-responsive d-flex align-items-center pt-4">
              <img
                :src="getLogoAssets(monographStore.infoWilayah?.kode_wilayah)"
                class="img-responsive h-17 align-bottom"
                alt=""
                style="width: auto"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="my-4">
        <div class="row text-muted text-center justify-content-center">
          {{ monographStore.labelWilayah.current }}
        </div>
        <div class="row text-center justify-content-center">
          {{ monographStore.infoWilayah?.nama }}
        </div>
      </div>

      <div class="row panel-group1" id="accordion1">
        <div class="panel panel-default mb-4">
          <div class="panel-heading1">
            <h4 class="panel-title1">
              <a
                class="accordion-toggle collapsed"
                data-bs-toggle="collapse"
                data-bs-parent="#accordion"
                href="#collapseFour"
                aria-expanded="false"
                >Informasi Wilayah</a
              >
            </h4>
          </div>
          <div
            id="collapseFour"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-expanded="false"
          >
            <div class="expanel-body">
              <table class="table-stripped">
                <tr v-for="wilayah in infoWilayah" :key="wilayah.level">
                  <td class="text-muted">{{ wilayah.level }}</td>
                  <td class="px-2">:</td>
                  <td>{{ wilayah.nama }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading1">
            <h4 class="panel-title1">
              <a
                class="accordion-toggle collapsed"
                data-bs-toggle="collapse"
                data-bs-parent="#accordion"
                href="#collapseFive"
                aria-expanded="false"
                >Pengurus Wilayah</a
              >
            </h4>
          </div>
          <div
            id="collapseFive"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-expanded="false"
          >
            <div class="expanel-body">
              <table class="table-stripped">
                <tr>
                  <td class="text-muted">Kepala</td>
                  <td class="px-2">:</td>
                  <td v-if="pengurusStore.pengurus.nama_ketua != null">
                    {{ pengurusStore.pengurus.nama_ketua }}
                  </td>
                  <td v-else class="text-muted">Belum ada data</td>
                </tr>
                <tr>
                  <td class="text-muted">Wakil</td>
                  <td class="px-2">:</td>
                  <td v-if="pengurusStore.pengurus.nama_wakil != null">
                    {{ pengurusStore.pengurus.nama_wakil }}
                  </td>
                  <td v-else class="text-muted">Belum ada data</td>
                </tr>
                <tr>
                  <td class="text-muted">Sekertaris</td>
                  <td class="px-2">:</td>
                  <td v-if="pengurusStore.pengurus.nama_sekretaris != null">
                    {{ pengurusStore.pengurus.nama_sekretaris }}
                  </td>
                  <td v-else class="text-muted">Belum ada data</td>
                </tr>

                <tr>
                  <td class="text-muted">Periode Awal</td>
                  <td class="px-2">:</td>
                  <td v-if="pengurusStore.pengurus.periode_awal_aktif != null">
                    {{ pengurusStore.pengurus.periode_awal_aktif }}
                  </td>
                  <td v-else class="text-muted">Belum ada data</td>
                </tr>
                <tr>
                  <td class="text-muted">Periode Akhir</td>
                  <td class="px-2">:</td>
                  <td v-if="pengurusStore.pengurus.periode_akhir_aktif != null">
                    {{ pengurusStore.pengurus.periode_akhir_aktif }}
                  </td>
                  <td v-else class="text-muted">Belum ada data</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { usePengurusStore } from "@/stores/pengurusWilayah";
import axios from "axios";
import { ref, computed, onMounted, inject } from "vue";

const urlApi = inject("urlApi");

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
const pengurusStore = usePengurusStore();

function getLogoAssets(kode: string) {
  return new URL(
    `../../assets/images/kabs-logo/logo${kode}.png`,
    import.meta.url
  ).href;
}
</script>
