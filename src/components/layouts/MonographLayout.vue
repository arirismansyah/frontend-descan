<template>
  <body v-bind:class="themeStore.light ? 'light-mode' : 'dark-mode'">
    <div class="page">
      <div class="page-main">
        <!-- app-Header -->
        <PageHeader></PageHeader>
        <!-- /app-Header -->

        <!--app-content open-->
        <div class="main-content mt-0">
          <div class="">
            <!-- CONTAINER -->
            <div class="main-container container-fluid">
              <!-- PAGE-HEADER -->
              <SubNav></SubNav>
              <!-- PAGE-HEADER END -->

              <!-- ROW-0 -->
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 panel panel-primary">
                      <!-- PROFILE -->
                      <ProfileMonograph></ProfileMonograph>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <!-- NAVIGATION -->
                      <div class="card" style="background: transparent">
                        <div class="card-header">
                          <h3 class="card-title">Menu</h3>
                        </div>
                        <div class="card-body" style="background: transparent">
                          <div class="row align-self-center mb-2 mt-2">
                            <div
                              class="col-6 col-sm-6 d-flex justify-content-center"
                            >
                              <button
                                @click="menuMonograph()"
                                class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
                                style="height: 100%"
                              >
                                <span>
                                  <ul>
                                    <li
                                      v-if="menuSelected == 'monograph'"
                                      class="fe fe-grid mb-4 text-info"
                                    ></li>
                                    <li
                                      v-else
                                      class="fe fe-grid mb-4 text-muted"
                                    ></li>
                                    <li>
                                      <h8
                                        v-if="menuSelected == 'monograph'"
                                        class="form-label text-info"
                                        >Monograf</h8
                                      >
                                      <h12 v-else class="form-label"
                                        >Monograf</h12
                                      >
                                    </li>
                                  </ul>
                                </span>
                              </button>
                            </div>
                            <div
                              class="col-6 col-sm-6 d-flex justify-content-center"
                            >
                              <button
                                @click="menuKemiskinan"
                                class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
                                style="height: 100%"
                              >
                                <span>
                                  <ul>
                                    <li
                                      v-if="menuSelected == 'kemiskinan'"
                                      class="fa fa-money mb-4 text-info"
                                    ></li>
                                    <li
                                      v-else
                                      class="fa fa-money mb-4 text-muted"
                                    ></li>
                                    <li>
                                      <h12
                                        v-if="menuSelected == 'kemiskinan'"
                                        class="form-label text-info"
                                        >Kemiskinan</h12
                                      >
                                      <h12 v-else class="form-label"
                                        >Kemiskinan</h12
                                      >
                                    </li>
                                  </ul>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div class="row align-self-center mt-2 mb-2">
                            <div
                              class="col-6 col-sm-6 d-flex justify-content-center"
                            >
                              <button
                                @click="menuStunting()"
                                class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
                                style="height: 100%"
                              >
                                <span>
                                  <ul>
                                    <li
                                      v-if="menuSelected == 'stunting'"
                                      class="mdi mdi-baby-buggy mb-4 text-info"
                                    ></li>
                                    <li
                                      v-else
                                      class="mdi mdi-baby-buggy mb-4 text-muted"
                                    ></li>
                                    <li>
                                      <h12
                                        v-if="menuSelected == 'stunting'"
                                        class="form-label text-info"
                                        >Stunting</h12
                                      >
                                      <h12 v-else class="form-label"
                                        >Stunting</h12
                                      >
                                    </li>
                                  </ul>
                                </span>
                              </button>
                            </div>
                            <div
                              class="col-6 col-sm-6 d-flex justify-content-center"
                            >
                              <button
                                @click="menuUmkm()"
                                class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg"
                                style="height: 100%"
                              >
                                <span>
                                  <ul>
                                    <li
                                      v-if="menuSelected == 'umkm'"
                                      class="fa fa-shopping-basket mb-4 text-info"
                                    ></li>
                                    <li
                                      v-else
                                      class="fa fa-shopping-basket mb-4 text-muted"
                                    ></li>
                                    <li>
                                      <h12
                                        v-if="menuSelected == 'umkm'"
                                        class="form-label text-info"
                                        >UMKM</h12
                                      >
                                      <h12 v-else class="form-label">UMKM</h12>
                                    </li>
                                  </ul>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-9 col-md-9">
                  <div class="panel-body border border-primary">
                    <!-- Main Mono -->
                    <MonographMain
                      v-if="menuSelected == 'monograph'"
                    ></MonographMain>
                    <MenuKemiskinan
                      v-if="menuSelected == 'kemiskinan'"
                    ></MenuKemiskinan>
                    <MenuStunting
                      v-if="menuSelected == 'stunting'"
                    ></MenuStunting>
                    <MenuUmkm v-if="menuSelected == 'umkm'"></MenuUmkm>
                  </div>
                </div>
              </div>
              <!-- ROW-0 -->
            </div>
          </div>
        </div>
        <!-- CONTAINER CLOSED -->
      </div>

      <!-- FOOTER -->
      <PageFooter></PageFooter>

      <!-- FOOTER CLOSED -->
    </div>
  </body>
</template>

<script setup lang="ts">
import PageHeader from "../navigation/PageHeader.vue";
import PageFooter from "../navigation/PageFooter.vue";
import SubNav from "../navigation/SubNav.vue";
import RightNav from "../navigation/RightNav.vue";
import ProfileMonograph from "../monograph/ProfileMonograph.vue";

import MonographMain from "../monograph/MonographMain.vue";
import MenuKemiskinan from "../kemiskinan/MenuKemiskinan.vue";
import MenuStunting from "../stunting/MenuStunting.vue";
import MenuUmkm from "../umkm/MenuUmkm.vue";

import { ref } from "vue";
import { useThemeStore } from "@/stores/theme";
const themeStore = useThemeStore();

const menuSelected = ref("monograph");

function menuMonograph() {
  menuSelected.value = "monograph";
}

function menuKemiskinan() {
  menuSelected.value = "kemiskinan";
}

function menuStunting() {
  menuSelected.value = "stunting";
}

function menuUmkm() {
  menuSelected.value = "umkm";
}
</script>
