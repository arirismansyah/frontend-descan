<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Informasi Umum</h3>
    </div>
    <div class="card-body">
      <div class="panel panel-primary">
        <div class="wideget-user-tab">
          <div class="tab-menu-heading">
            <div class="tabs-menu1">
              <!-- TAB PANELS -->
              <ul class="nav">
                <li>
                  <a
                    href="#deskripsi"
                    @click="activeTab('deskripsi')"
                    class="active me-1"
                    data-bs-toggle="tab"
                    >Deskripsi</a
                  >
                </li>
                <li>
                  <a
                    href="#general"
                    @click="activeTab('general')"
                    class="me-1"
                    data-bs-toggle="tab"
                    >Informasi Umum</a
                  >
                </li>
                <li>
                  <a
                    href="#topograph"
                    @click="activeTab('topograph')"
                    class="me-1"
                    data-bs-toggle="tab"
                    >Topografi</a
                  >
                </li>
                <li>
                  <a
                    href="#pengurus"
                    @click="activeTab('pengurus')"
                    data-bs-toggle="tab"
                    class="me-1"
                    >Pengurus</a
                  >
                </li>
                <li>
                  <a
                    href="#fasilitas"
                    @click="activeTab('fasilitas')"
                    data-bs-toggle="tab"
                    class="me-1"
                    >Fasilitas Umum</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body tabs-menu-body">
          <div class="tab-content">
            <!-- TAB CONTENT DESC -->
            <div class="tab-pane" id="deskripsi">
              <DescriptionTabMonograph></DescriptionTabMonograph>
            </div>

            <!-- TAB CONTENT GENERAL -->
            <div class="tab-pane" id="general">
              <GeneralTabMonograph></GeneralTabMonograph>
            </div>

            <!-- TAB CONTENT TOPOGRAFI -->
            <div class="tab-pane" id="topograph">
              <TopographTabMonograph></TopographTabMonograph>
            </div>

            <!-- TAB CONTENT PENGURUS -->
            <div class="tab-pane" id="pengurus">
              <PengurusTabMonograph></PengurusTabMonograph>
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
                    <div class="tab-pane active" id="fas1">
                      <SubTabPemerintahan></SubTabPemerintahan>
                    </div>
                    <div class="tab-pane" id="fas2">
                      <SubTabFasKesehatan></SubTabFasKesehatan>
                    </div>
                    <div class="tab-pane" id="fas3">
                      <SubTabFasPendidikan></SubTabFasPendidikan>
                    </div>
                    <div class="tab-pane" id="fas4">
                      <SubTabFasEkonomi></SubTabFasEkonomi>
                    </div>
                    <div class="tab-pane" id="fas5">
                      <SubTabFasIbadah></SubTabFasIbadah>
                    </div>
                    <div class="tab-pane" id="fas6">
                      <SubTabFasTransportasi></SubTabFasTransportasi>
                    </div>
                    <div class="tab-pane" id="fas7">
                      <SubTabFasInfokom></SubTabFasInfokom>
                    </div>
                    <div class="tab-pane" id="fas8">
                      <SubTabOlahraga></SubTabOlahraga>
                    </div>
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
// import modules
import { ref, onMounted } from "vue";

// import elements
import DescriptionTabMonograph from "./DescriptionTabMonograph.vue";
import GeneralTabMonograph from "./GeneralTabMonograph.vue";
import TopographTabMonograph from "./TopographTabMonograph.vue";
import PengurusTabMonograph from "@/components/monograph/pengurus/PengurusTabMonograph.vue";
import SubTabFasKesehatan from "./fasilitas/SubTabFasKesehatan.vue";
import SubTabFasPendidikan from "./fasilitas/SubTabFasPendidikan.vue";
import SubTabFasEkonomi from "./fasilitas/SubTabFasEkonomi.vue";
import SubTabFasIbadah from "./fasilitas/SubTabFasIbadah.vue";
import SubTabFasTransportasi from "./fasilitas/SubTabFasTransportasi.vue";
import SubTabFasInfokom from "./fasilitas/SubTabFasInfokom.vue";
import SubTabOlahraga from "./fasilitas/SubTabOlahraga.vue";
import SubTabPemerintahan from "./fasilitas/SubTabPemerintahan.vue";

const activeTab = ref("deskripsi");

function tabActivate(tab: string) {
  activeTab.value = tab;
  let tabElement = document.getElementById(tab);
  tabElement?.classList.add("active");
}

// mount
onMounted(() => {
  tabActivate(activeTab.value);
});
</script>
