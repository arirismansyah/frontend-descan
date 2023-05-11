<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Informasi Umum</h3>
    </div>
    <div class="card-body">
      <div class="panel panel-primary">
        <div class="tab-menu-heading">
          <div class="tabs-menu">
            <!-- TAB PANELS -->
            <ul class="nav panel-tabs">
              <li>
                <a href="#deskripsi" class="active me-1" data-bs-toggle="tab"
                  >Deskripsi</a
                >
              </li>
              <li>
                <a href="#general" class="me-1" data-bs-toggle="tab"
                  >Informasi Umum</a
                >
              </li>
              <li>
                <a href="#pengurus" data-bs-toggle="tab" class="me-1"
                  >Pengurus</a
                >
              </li>
              <li>
                <a href="#fasilitas" data-bs-toggle="tab" class="me-1"
                  >Fasilitas Umum</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="panel-body tabs-menu-body">
          <div class="tab-content">
            <!-- TAB CONTENT DESC -->
            <div class="tab-pane active" id="deskripsi">
              <LoaderElement v-if="!isLoaded"></LoaderElement>
              <div v-else class="bg-container-content">
                <img
                  class="img-bg"
                  src="@/assets/images/footage/img_(12).jpg"
                />
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
                                v-if="
                                  monographStore.infoWilayah?.kode_kab != '00'
                                "
                                class="img-responsive hover-scale mb-0"
                              >
                                <a
                                  :href="
                                    '/monograph/' +
                                    monographStore.infoWilayah?.kode_wilayah
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
                                pengurusStore.pengurus.foto.split('/')[5] !=
                                  'null'
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
                            <h6 class="font-weight-bold text-white">
                              Kepala Daerah
                            </h6>
                          </div>
                          <div class="row justify-content-center">
                            <button type="button" class="btn btn-info">
                              <div
                                class="row text-center justify-content-center"
                              >
                                <span
                                  v-if="
                                    pengurusStore.pengurus.nama_ketua != null
                                  "
                                >
                                  {{ pengurusStore.pengurus.nama_ketua }}
                                </span>
                                <h6 class="text-muted" v-else>
                                  Belum ada data
                                </h6>
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
            </div>

            <!-- TAB CONTENT GENERAL -->
            <div class="tab-pane" id="general"></div>

            <!-- TAB CONTENT PENGURUS -->
            <div class="tab-pane" id="pengurus">
              <div class="table-responsive">
                <table
                  class="table border text-nowrap text-md-nowrap table-striped mg-b-0"
                >
                  <tbody>
                    <tr>
                      <td class="text-muted">
                        <strong>Kepala Daerah</strong>
                      </td>
                      <td class="px-2">:</td>
                      <td v-if="pengurusStore.pengurus.nama_ketua != null">
                        {{ pengurusStore.pengurus.nama_ketua }}
                      </td>
                      <td v-else class="text-muted">Belum ada data</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <strong>Wakil</strong>
                      </td>
                      <td class="px-2">:</td>
                      <td v-if="pengurusStore.pengurus.nama_wakil != null">
                        {{ pengurusStore.pengurus.nama_wakil }}
                      </td>
                      <td v-else class="text-muted">Belum ada data</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <strong>Sekretaris</strong>
                      </td>
                      <td class="px-2">:</td>
                      <td v-if="pengurusStore.pengurus.nama_sekretaris != null">
                        {{ pengurusStore.pengurus.nama_sekretaris }}
                      </td>
                      <td v-else class="text-muted">Belum ada data</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <strong>Pengurus Lainnya</strong>
                      </td>
                      <td class="px-2">:</td>
                      <td
                        v-if="pengurusStore.pengurus.pengurus_lainnya != null"
                      >
                        <div
                          v-html="pengurusStore.pengurus.pengurus_lainnya"
                        ></div>
                      </td>
                      <td v-else class="text-muted">Belum ada data</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <strong>Periode Awal</strong>
                      </td>
                      <td class="px-2">:</td>
                      <td
                        v-if="pengurusStore.pengurus.periode_awal_aktif != null"
                      >
                        {{ pengurusStore.pengurus.periode_awal_aktif }}
                      </td>
                      <td v-else class="text-muted">Belum ada data</td>
                    </tr>
                    <tr>
                      <td class="text-muted">
                        <strong>Periode Akhir</strong>
                      </td>
                      <td class="px-2">:</td>
                      <td
                        v-if="
                          pengurusStore.pengurus.periode_akhir_aktif != null
                        "
                      >
                        {{ pengurusStore.pengurus.periode_akhir_aktif }}
                      </td>
                      <td v-else class="text-muted">Belum ada data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- TAB CONTENT FASILITAS -->
            <div class="tab-pane" id="fasilitas">
              <div class="row">
                <div class="col-3">
                  <div class="tabs-menu">
                    <ul
                      class="nav nav-pills flex-column panel-tabs"
                      aria-orientation="vertical"
                    >
                      <li>
                        <a href="#fas1" class="active me-1" data-bs-toggle="tab"
                          >Pemerintahan</a
                        >
                      </li>
                      <li>
                        <a href="#fas2" data-bs-toggle="tab" class="me-1">
                          Kesehatan
                        </a>
                      </li>
                      <li>
                        <a href="#fas3" data-bs-toggle="tab" class="me-1">
                          Pendidikan
                        </a>
                      </li>
                      <li>
                        <a href="#fas4" data-bs-toggle="tab" class="me-1">
                          Ekonomi
                        </a>
                      </li>
                      <li>
                        <a href="#fas5" data-bs-toggle="tab" class="me-1">
                          Tempat Ibadah
                        </a>
                      </li>
                      <li>
                        <a href="#fas6" data-bs-toggle="tab" class="me-1">
                          Transportasi
                        </a>
                      </li>
                      <li>
                        <a href="#fas7" data-bs-toggle="tab" class="me-1"
                          >Informasi Komunikasi</a
                        >
                      </li>
                      <li>
                        <a href="#fas8" data-bs-toggle="tab" class="me-1"
                          >Olahraga</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-9">
                  <div class="tab-content">
                    <div class="tab-pane active" id="fas1">Pemerintahan</div>
                    <div class="tab-pane" id="fas2">Kesehatan</div>
                    <div class="tab-pane" id="fas3">Pendidikan</div>
                    <div class="tab-pane" id="fas4">Ekonomi</div>
                    <div class="tab-pane" id="fas5">Tempat Ibadah</div>
                    <div class="tab-pane" id="fas6">Transportasi</div>
                    <div class="tab-pane" id="fas7">Informasi Komunikasi</div>
                    <div class="tab-pane" id="fas8">Olahraga</div>
                  </div>
                </div>
              </div>
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
import LoaderElement from "../navigation/LoaderElement.vue";

const pengurusStore = usePengurusStore();
const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");
const deskripsi = ref("");
const monographStore = useMonografWilayahStore();

async function getDeskripsi() {
  loadingState.value = "false";
  await axios
    .get(
      `${urlApi}wilayah/${monographStore.infoWilayah?.kode_wilayah}/deskripsi`
    )
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
