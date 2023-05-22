<template>
  <LoaderElement v-if="!isLoaded"></LoaderElement>
  <div v-else class="row">
    <div class="col-lg-8 col-md-8">
      <div class="row">
        <div class="col">
          <p>
            Topografi sebagian besar wilayah Kabupaten
            {{ monografWilayahStore.infoWilayah?.nama }} adalah sebagai berikut:
          </p>
          <!-- koordinat -->
          <div
            v-if="
              koordWilayah[0].nilai != null && koordWilayah[1].nilai != null
            "
            class="px-2"
          >
            <ul class="list-style-1">
              <li>
                {{ koordWilayah[0].nama_variabel }} {{ koordWilayah[0].nilai }}
              </li>
              <li>
                {{ koordWilayah[1].nama_variabel }} {{ koordWilayah[1].nilai }}
              </li>
            </ul>
          </div>
          <!-- luas -->
          <p v-if="luasWilayah.nilai != null">
            {{ luasWilayah.nama_variabel }}
            {{ monografWilayahStore.infoWilayah?.nama }} adalah
            {{ luasWilayah.nilai }} {{ luasWilayah.deskripsi_variabel }}.
          </p>
          <!-- altitude -->
          <p v-if="tinggiWilayah.nilai != null">
            {{ tinggiWilayah.nama_variabel }}
            {{ monografWilayahStore.infoWilayah?.nama }} adalah
            {{ tinggiWilayah.nilai }} {{ tinggiWilayah.deskripsi_variabel }}.
          </p>
          <!-- topografi -->
          <p v-if="topografiWilayah.nilai != null">
            Sebagian besar wilayah
            {{ monografWilayahStore.infoWilayah?.nama }} merupakan
            <span v-if="topografiWilayah.nilai == '1'"> Puncak/Tebing</span>
            <span v-if="topografiWilayah.nilai == '2'"> Lereng</span>
            <span v-if="topografiWilayah.nilai == '3'"> Dataran</span>
            <span v-if="topografiWilayah.nilai == '4'"> Lembah</span>
          </p>

          <!-- batas laut -->
          <p v-if="batasLaut.nilai != null">
            <span v-if="batasLaut.nilai == '1'">Ada</span>
            <span v-if="batasLaut.nilai == '2'">Tidak ada</span> wilayah yang
            berbatasan langsung dengan laut
          </p>
          <!-- batas hutan -->

          <!-- pemanfaatan laut -->
          <div v-if="batasLaut.nilai == '1'">
            <ul class="list-style-1">
              Pemanfaatan laut untuk:
              <li v-for="(data, idx) in pemanfaatanLaut" :key="idx">
                <span v-if="data.nilai == '1'">{{ data.nama_variabel }}</span>
              </li>
            </ul>
          </div>
          <!-- pemanfaatan laut -->

          <!-- batas hutan -->
          <p v-if="batasHutan.nilai != null">
            {{ batasHutan.nama_variabel }} berada
            <span v-if="batasHutan.nilai == '1'">di dalam kawasan hutan</span>
            <span v-if="batasHutan.nilai == '2'"
              >di tepi/sekitar kawasan hutan</span
            >
            <span v-if="batasHutan.nilai == '3'">di luar kawasan hutan</span>
          </p>
          <!-- batas hutan -->
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4">
      <div class="row">
        <div class="col">
          <div class="expanel expanel-default" style="width: 100%">
            <div class="expanel-heading">
              <h6 class="text-center">
                <i
                  class="fa fa-map float-start text-primary text-primary-shadow"
                ></i
                ><span class="card-title">Luas Wilayah</span>
              </h6>
            </div>
            <div
              class="expanel-body d-flex align-items-center justify-content-center"
            >
              <div
                v-if="luasWilayah.nilai != null"
                class="expanel-body text-center align-middle"
              >
                <h3 class="number-font">
                  {{ luasWilayah.nilai }} Km<sup>2</sup>
                </h3>
              </div>
              <div
                v-else
                class="expanel-body text-center text-muted align-middle"
              >
                Belum ada data
              </div>
            </div>
            <div class="expanel-footer justify-content-center">
              <div class="row">
                <p class="text-muted text-center">
                  Keterangan: {{ luasWilayah.nama_variabel }} dalam
                  {{ luasWilayah.deskripsi_variabel }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="expanel expanel-default" style="width: 100%">
            <div class="expanel-heading">
              <h6 class="text-center">
                <i
                  class="fa fa-map float-start text-primary text-primary-shadow"
                ></i
                ><span class="card-title">Tinggi Wilayah</span>
              </h6>
            </div>
            <div class="expanel-body justify-content-center">
              <div class="row">
                <div
                  v-if="tinggiWilayah.nilai != null"
                  class="expanel-body text-center align-middle"
                >
                  <h3 class="number-font">
                    {{ tinggiWilayah.nilai }}
                    {{ tinggiWilayah.deskripsi_variabel }}
                  </h3>
                </div>
                <div
                  v-else
                  class="expanel-body text-center text-muted align-middle"
                >
                  Belum ada data
                </div>
              </div>
            </div>
            <div class="expanel-footer justify-content-center">
              <div class="row">
                <p class="text-muted text-center">
                  Keterangan: {{ tinggiWilayah.nama_variabel }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import modules
import axios from "axios";
import { ref, inject, computed, onMounted } from "vue";

// import stores
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";

// import elements
import LoaderElement from "../navigation/LoaderElement.vue";

// const & var
const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const dataTopograph = ref(null);
const kodeWilayahStore = useKodeWilayahStore();
const monografWilayahStore = useMonografWilayahStore();

const luasWilayah = ref(null);
const tinggiWilayah = ref(null);
const koordWilayah = ref([]);
const topografiWilayah = ref(null);
const batasLaut = ref(null);
const batasHutan = ref(null);
const pemanfaatanLaut = ref([]);

// define functions
async function getTopo() {
  loadingState.value = "false";
  await axios
    .get(`${urlApi}dashboard/${kodeWilayahStore.kode?.kode}/topografi`)
    .then(({ data }) => {
      dataTopograph.value = data.datas;
      loadingState.value = "success";
      console.log("here");

      if (dataTopograph.value != null) {
        dataTopograph.value.forEach((element) => {
          const kategori_var = element["kategori_variabel"];

          switch (kategori_var) {
            case "luas_wilayah":
              luasWilayah.value = element;
              break;
            case "ketinggian_wilayah":
              tinggiWilayah.value = element;
              break;
            case "koordinat_wilayah":
              koordWilayah.value.push(element);
              break;
            case "topografi":
              topografiWilayah.value = element;
              break;
            case "kawasan_hutan":
              batasHutan.value = element;
              break;
            case "berbatasan_laut":
              batasLaut.value = element;
              break;
            case "pemanfaatan_laut":
              pemanfaatanLaut.value.push(element);
              break;
            default:
              break;
          }
        });
      }
    });
}

// mount
onMounted(() => {
  getTopo();
});
</script>
