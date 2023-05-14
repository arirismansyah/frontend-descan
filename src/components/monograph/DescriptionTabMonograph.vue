<template>
  <LoaderElement v-if="!isLoaded"></LoaderElement>
  <div v-else class="bg-container-content">
    <img class="img-bg" src="@/assets/images/footage/img_(24).jpg" />
    <div class="mask-bg">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <!-- DESKRIPSI DAERAH -->
          <div class="row">
            <div class="col p-6">
              <div class="row mb-6">
                <div
                  class="col d-flex justify-content-start align-items-center"
                >
                  <!-- LOGO PROV -->
                  <figure
                    class="img-responsive hover-scale mb-0 align-items-center"
                  >
                    <a :href="'/monograph/' + 16">
                      <img
                        class="img-responsive"
                        :src="getLogoAssets('16')"
                        alt=""
                        style="max-height: 80px; width: auto"
                      />
                      <span class="bg"></span>
                    </a>
                  </figure>

                  <!-- LOGO DAERAH -->
                  <figure
                    v-if="monographStore.infoWilayah?.kode_kab != '00'"
                    class="img-responsive hover-scale mb-0"
                  >
                    <a
                      :href="
                        '/monograph/' + monographStore.infoWilayah?.kode_wilayah
                      "
                    >
                      <img
                        class="img-responsive"
                        :src="
                          getLogoAssets(
                            monographStore.infoWilayah?.kode_wilayah
                          )
                        "
                        alt=""
                        style="max-height: 72px; width: auto"
                      />
                      <span class="bg"></span>
                    </a>
                  </figure>

                  <!-- JUDUL - NAMA DAERAH -->
                  <div class="col">
                    <div class="row">
                      <h6 class="text-white mx-4 my-auto">
                        {{ monographStore.labelWilayah["current"] }}
                        :
                      </h6>
                    </div>
                    <div class="row">
                      <h3 class="text-white mx-4 my-auto">
                        {{ monographStore.infoWilayah?.nama }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <!-- DESKRIPSI -->
              <p class="text-start text-white fs-6">
                {{ deskripsi }}
              </p>
              <!-- DESKRIPSI -->
            </div>
          </div>
        </div>

        <!-- KEPALA DAERAH -->
        <div class="col-lg-4 col-md-4">
          <div class="row">
            <div class="col p-6 align-items-center">
              <!-- FOTO KEPALA DAERAH -->
              <div class="row mb-4 justify-content-center">
                <img
                  v-if="
                    pengurusStore.pengurus.foto != undefined &&
                    pengurusStore.pengurus.foto.split('/')[5] != 'null' &&
                    pengurusStore.pengurus.foto.split('/')[5] != ''
                  "
                  :src="pengurusStore.pengurus.foto"
                  alt=""
                  srcset=""
                  style="max-height: 250px; width: auto"
                />
                <img
                  v-else
                  src="@/assets/images/icon/profile.png"
                  alt=""
                  srcset=""
                />
              </div>
              <!-- FOTO KEPALA DAERAH -->

              <!-- NAMA KEPALA DAERAH -->
              <div class="row justify-content-center text-center">
                <h6 class="font-weight-bold text-white">Kepala Daerah</h6>
              </div>
              <div class="row justify-content-center">
                <button type="button" class="btn btn-info">
                  <div class="row text-center justify-content-center">
                    <span v-if="pengurusStore.pengurus.nama_ketua != null">
                      {{ pengurusStore.pengurus.nama_ketua }}
                    </span>
                    <span v-else>Belum ada data</span>
                  </div>
                </button>
              </div>
              <!-- NAMA KEPALA DAERAH -->
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
import { usePengurusStore } from "@/stores/pengurusWilayah";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import LoaderElement from "../navigation/LoaderElement.vue";

const pengurusStore = usePengurusStore();
const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const deskripsi = ref("");
const monographStore = useMonografWilayahStore();
const kodeWilayahStore = useKodeWilayahStore();

async function getDeskripsi() {
  loadingState.value = "false";
  await axios
    .get(`${urlApi}wilayah/${kodeWilayahStore.kode?.kode}/deskripsi`)
    .then(({ data }) => {
      if (data.datas.deskripsi == "") {
        axios.get(`${urlApi}wilayah/16/deskripsi`).then(({ data }) => {
          deskripsi.value = data.datas.deskripsi;
          loadingState.value = "success";
        });
      } else {
        deskripsi.value = data.datas.deskripsi;
        loadingState.value = "success";
      }
    });
}

onMounted(() => {
  getDeskripsi();
});

function getLogoAssets(kode: string) {
  return new URL(
    `../../assets/images/kabs-logo/logo${kode}.png`,
    import.meta.url
  ).href;
}
</script>
