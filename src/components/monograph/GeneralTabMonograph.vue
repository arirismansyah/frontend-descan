<template>
  <LoaderElement v-if="!isLoaded"></LoaderElement>
  <div v-else>
    <!-- ROW 1 -->
    <div class="row">
      <!-- LUAS WILAYAH -->
      <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
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
              v-if="luasWilayah != null"
              class="expanel-body text-center align-middle"
            >
              <h3 class="number-font">{{ luasWilayah }} Km<sup>2</sup></h3>
            </div>
            <div
              v-else
              class="expanel-body text-center text-muted align-middle"
            >
              Belum ada data
            </div>
          </div>
        </div>
      </div>

      <!-- BATAS WILAYAH -->
      <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
        <div class="expanel expanel-default" style="width: 100%">
          <div class="expanel-heading">
            <h6 class="text-center">
              <i
                class="fa fa-map-signs float-start text-primary text-primary-shadow"
              ></i
              ><span class="card-title">Batas Wilayah</span>
            </h6>
          </div>
          <div class="expanel-body">
            <div v-if="batasWilayah != null" class="expanel-body text-start">
              <ul class="task-list">
                <li>
                  <i class="task-icon bg-primary"></i>
                  <p class="fs-12">
                    {{ batasWilayah[0] }}
                  </p>
                </li>
                <li>
                  <i class="task-icon bg-primary"></i>
                  <p class="fs-12">
                    {{ batasWilayah[1] }}
                  </p>
                </li>
                <li>
                  <i class="task-icon bg-primary"></i>
                  <p class="fs-12">
                    {{ batasWilayah[2] }}
                  </p>
                </li>
                <li>
                  <i class="task-icon bg-primary"></i>
                  <p class="fs-12">
                    {{ batasWilayah[3] }}
                  </p>
                </li>
              </ul>
            </div>
            <div v-else class="expanel-body text-center text-muted">
              Belum ada data
            </div>
          </div>
        </div>
      </div>

      <!-- KEUNGGULAN WILAYAH -->
      <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
        <div class="expanel expanel-default" style="width: 100%">
          <div class="expanel-heading">
            <h6 class="text-center">
              <i
                class="fa fa-thumbs-up float-start text-primary text-primary-shadow"
              ></i
              ><span class="card-title">Keunggulan Wilayah</span>
            </h6>
          </div>
          <div class="expanel-body">
            <div
              v-if="keunggulanWilayah != null"
              class="expanel-body text-center"
            >
              <h5 class="card-title">
                {{ keunggulanWilayah }}
              </h5>
            </div>
            <div v-else class="expanel-body text-center text-muted">
              Belum ada data
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="row">
      <!-- GRID GENERAL -->
      <div class="col-lg col-md col-sm">
        <div class="expanel expanel-default">
          <div class="expanel-heading text-center">
            <h6 class="text-center">
              <i
                class="fa fa-pagelines float-start text-primary text-primary-shadow"
              ></i
              ><span class="card-title">Pangan Unggulan Wilayah</span>
            </h6>
          </div>
          <div class="expanel-body text-center">
            <div class="expanel-body">
              <table class="table">
                <tbody>
                  <tr>
                    <td
                      v-if="panganUnggulanWilayah != null"
                      class="expanel-body align-items-center text-center align-middle"
                      rowspan="2"
                    >
                      <h5 class="card-title">
                        {{ panganUnggulanWilayah }}
                      </h5>
                    </td>
                    <td
                      v-else
                      rowspan="2"
                      class="text-center align-items-center text-muted align-middle"
                    >
                      Belum ada data
                    </td>
                    <td>
                      <h6 class="card-title">Luas Tanam</h6>
                    </td>
                    <td>
                      <h6 class="card-title">Luas Panen</h6>
                    </td>
                    <td>
                      <h6 class="card-title">Produktifitas</h6>
                    </td>
                  </tr>
                  <tr>
                    <td
                      v-if="luasTanam != null"
                      class="expanel-body text-center"
                    >
                      <p class="number-font">
                        {{ luasTanam }}
                      </p>
                    </td>
                    <td v-else class="expanel-body text-center text-muted">
                      Belum ada data
                    </td>

                    <td
                      v-if="luasPanen != null"
                      class="expanel-body text-center"
                    >
                      <p class="number-font">
                        {{ luasPanen }}
                      </p>
                    </td>
                    <td v-else class="expanel-body text-center text-muted">
                      Belum ada data
                    </td>

                    <td
                      v-if="produktivitas != null"
                      class="expanel-body text-center"
                    >
                      <p class="number-font">
                        {{ produktivitas }}
                      </p>
                    </td>
                    <td v-else class="expanel-body text-center text-muted">
                      Belum ada data
                    </td>
                  </tr>
                </tbody>
              </table>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROW 3 -->
    <div class="row">
      <!-- GRID GENERAL -->

      <div class="col-lg col-md col-sm">
        <div class="expanel expanel-default">
          <div class="expanel-heading">
            <h6 class="text-center">
              <i
                class="fa fa-user float-start text-primary text-primary-shadow"
              ></i
              ><span class="card-title">Jumlah Penduduk</span>
            </h6>
          </div>
          <div class="expanel-body">
            <div
              v-if="jumlahPenduduk != null && !isNaN(jumlahPenduduk)"
              class="expanel-body text-center"
            >
              <h3 class="number-font">
                {{ jumlahPenduduk }}
              </h3>
            </div>
            <div v-else class="expanel-body text-center text-muted">
              Belum ada data
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg col-md col-sm">
        <div class="expanel expanel-default">
          <div class="expanel-heading">
            <h6 class="text-center">
              <i
                class="fa fa-group float-start text-primary text-primary-shadow"
              ></i
              ><span class="card-title">Jumlah Keluarga</span>
            </h6>
          </div>
          <div class="expanel-body">
            <div v-if="jumlahKeluarga != null" class="expanel-body text-center">
              <h3 class="number-font">
                {{ jumlahKeluarga }}
              </h3>
            </div>
            <div v-else class="expanel-body text-center text-muted">
              Belum ada data
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg col-md col-sm">
        <div class="expanel expanel-default">
          <div class="expanel-heading">
            <h6 class="text-center">
              <i
                class="fa fa-wheelchair-alt float-start text-primary text-primary-shadow"
              ></i
              ><span class="card-title">Jumlah Disabilitas</span>
            </h6>
          </div>
          <div class="expanel-body">
            <div
              v-if="jumlahDisabilitas != null && !isNaN(jumlahDisabilitas)"
              class="expanel-body text-center"
            >
              <h3 class="number-font">
                {{ jumlahDisabilitas }}
              </h3>
            </div>
            <div v-else class="expanel-body text-center text-muted">
              Belum ada data
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, inject, computed, onMounted } from "vue";
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import LoaderElement from "../navigation/LoaderElement.vue";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const monographStore = useMonografWilayahStore();
const kodeWilayahStore = useKodeWilayahStore();

const generalData = ref(null);
const luasWilayah = ref(null);
const batasWilayah = ref(null);
const keunggulanWilayah = ref(null);
const panganUnggulanWilayah = ref(null);
const luasTanam = ref(null);
const luasPanen = ref(null);
const produktivitas = ref(null);
const jumlahKeluarga = ref(null);
const jumlahPenduduk = ref(null);
const jumlahDisabilitas = ref(null);

async function getMonograph() {
  loadingState.value = "false";
  await axios
    .get(`${urlApi}dashboard/${kodeWilayahStore.kode?.kode}/monograph`)
    .then(({ data }) => {
      generalData.value = data.datas;
      loadingState.value = "success";
      if (generalData.value != null) {
        generalData.value.forEach((element) => {
          const kategori_var = element["kategori_variabel"];

          switch (kategori_var) {
            case "luas_wilayah":
              luasWilayah.value = element["nilai"];
              break;
            case "batas_wilayah":
              if (element["nilai"] != null) {
                if (element["nilai"].includes("\n")) {
                  batasWilayah.value = element["nilai"].split("\n");
                }
                if (element["nilai"].includes("\t")) {
                  batasWilayah.value = element["nilai"].split("\t");
                }
              }
              break;
            case "keunggulan_wilayah":
              keunggulanWilayah.value = element["nilai"];
              break;
            case "pangan_unggulan":
              panganUnggulanWilayah.value = element["nilai"];
              break;
            case "jumlah_keluarga":
              jumlahKeluarga.value = element["nilai"];
              break;
            case "jumlah_penduduk":
              jumlahPenduduk.value =
                parseInt(jumlahPenduduk.value) + parseInt(element["nilai"]);
              break;
            case "penyandang_disabilitas":
              if (jumlahDisabilitas.value != null) {
                jumlahDisabilitas.value =
                  parseInt(jumlahDisabilitas.value) +
                  parseInt(element["nilai"]);
              } else {
                jumlahDisabilitas.value = 0 + parseInt(element["nilai"]);
              }

              break;
            default:
              break;
          }
        });
      }
    });
}

onMounted(() => {
  getMonograph();
});
</script>
