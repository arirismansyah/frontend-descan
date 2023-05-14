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
              <DescriptionTabMonograph></DescriptionTabMonograph>
            </div>

            <!-- TAB CONTENT GENERAL -->
            <div class="tab-pane" id="general">
              <GeneralTabMonograph></GeneralTabMonograph>
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
import DescriptionTabMonograph from "./DescriptionTabMonograph.vue";
import GeneralTabMonograph from "./GeneralTabMonograph.vue";
import PengurusTabMonograph from "@/components/monograph/pengurus/PengurusTabMonograph.vue";
import FasilitasTabMonograph from "./fasilitas/FasilitasTabMonograph.vue";

const pengurusStore = usePengurusStore();
</script>
