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
          <i class="fe fe-download"></i>
        </span>
        Download Data
      </a>
    </div>
  </div>
  <!-- PAGE-HEADER END -->

  <!-- BANNER JUMLAH KELUARGA MISKIN -->
  <div class="row" v-if="!isLoaded">
    <div class="col">
      <LoaderElement></LoaderElement>
    </div>
  </div>
  <div v-else class="row">
    <div class="col">
      <div class="card bg-danger img-card box-primary-shadow">
        <div class="card-body">
          <div class="d-flex">
            <div class="text-white">
              <h2
                v-if="
                  state.sumKesejahteraan != null &&
                  state.sumKesejahteraan.sangat_miskin != null
                "
                class="mb-0 number-font"
              >
                {{ state.sumKesejahteraan?.sangat_miskin }}
              </h2>
              <h6 v-else>Belum ada data</h6>
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
              <h2
                v-if="
                  state.sumKesejahteraan != null &&
                  state.sumKesejahteraan.miskin != null
                "
                class="mb-0 number-font"
              >
                {{ state.sumKesejahteraan?.miskin }}
              </h2>
              <h6 v-else>Belum ada data</h6>
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
              <h2
                v-if="
                  state.sumKesejahteraan != null &&
                  state.sumKesejahteraan.tidak_miskin != null
                "
                class="mb-0 number-font"
              >
                {{ state.sumKesejahteraan?.tidak_miskin }}
              </h2>
              <h6 v-else>Belum ada data</h6>
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
// import modules
import axios from "axios";
import { ref, inject, computed, onMounted, reactive } from "vue";

// import stores
import { useMonografWilayahStore } from "@/stores/monografWilayah";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import type { SumKesejahteraan } from "@/models/SumKesejahteraan";

// import components
import LoaderElement from "../navigation/LoaderElement.vue";

const loadingState = ref("false");
const isLoaded = computed(() => loadingState.value === "success");
const urlApi = inject("urlApi");

const monographStore = useMonografWilayahStore();
const kodeWilayahStore = useKodeWilayahStore();
const state = reactive({
  sumKesejahteraan: null as SumKesejahteraan | null,
});

async function getSumKesejahteraan() {
  loadingState.value = "false";
  try {
    await axios
      .get(
        `${urlApi}keluarga_miskin/${kodeWilayahStore.kode?.kode}/sum_status_kesejahteraan`
      )
      .then(({ data }) => {
        if (data.status == "success") {
          state.sumKesejahteraan = data.datas[0];
          loadingState.value = "success";
        } else {
          console.log("here");

          loadingState.value = "success";
          console.log("Data gagal disimpan, silahkan ulangi lagi");
        }
      });
  } catch (error) {
    loadingState.value = "success";
    console.log(error);
  }
}

onMounted(() => {
  getSumKesejahteraan();
});
</script>
