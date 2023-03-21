<template>
  <div class="card accordion-item" style="background: transparent">
    <div class="card-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <h3 class="card-title">Menu</h3>
      </button>
    </div>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="card-body accordion-body p-2" style="background: transparent">
        <div class="row justify-content-center mb-2 mt-2">
          <div class="col-6 col-sm-6 d-flex justify-content-center">
            <button
              @click="menuMonograph()"
              class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
              style="height: 100%"
            >
              <span>
                <ul>
                  <li
                    v-if="menuStore.menu == 'monograph'"
                    class="fe fe-grid mb-4 text-primary"
                  ></li>
                  <li v-else class="fe fe-grid mb-4 text-muted"></li>
                  <li>
                    <h8
                      v-if="menuStore.menu == 'monograph'"
                      class="form-label text-primary"
                      >Monograf</h8
                    >
                    <h12 v-else class="form-label">Monograf</h12>
                  </li>
                </ul>
              </span>
            </button>
          </div>
          <div class="col-6 col-sm-6 d-flex justify-content-center">
            <button
              @click="menuKemiskinan"
              class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
              style="height: 100%"
            >
              <span>
                <ul>
                  <li
                    v-if="menuStore.menu == 'kemiskinan'"
                    class="fa fa-money mb-4 text-primary"
                  ></li>
                  <li v-else class="fa fa-money mb-4 text-muted"></li>
                  <li>
                    <h12
                      v-if="menuStore.menu == 'kemiskinan'"
                      class="form-label text-primary"
                      >Kemiskinan</h12
                    >
                    <h12 v-else class="form-label">Kemiskinan</h12>
                  </li>
                </ul>
              </span>
            </button>
          </div>
        </div>
        <div class="row align-self-center mt-2 mb-2">
          <div class="col-6 col-sm-6 d-flex justify-content-center">
            <button
              @click="menuStunting()"
              class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
              style="height: 100%"
            >
              <span>
                <ul>
                  <li
                    v-if="menuStore.menu == 'stunting'"
                    class="mdi mdi-baby-buggy mb-4 text-primary"
                  ></li>
                  <li v-else class="mdi mdi-baby-buggy mb-4 text-muted"></li>
                  <li>
                    <h12
                      v-if="menuStore.menu == 'stunting'"
                      class="form-label text-primary"
                      >Stunting</h12
                    >
                    <h12 v-else class="form-label">Stunting</h12>
                  </li>
                </ul>
              </span>
            </button>
          </div>
          <div class="col-6 col-sm-6 d-flex justify-content-center">
            <button
              @click="menuUmkm()"
              class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg"
              style="height: 100%"
            >
              <span>
                <ul>
                  <li
                    v-if="menuStore.menu == 'umkm'"
                    class="fa fa-shopping-basket mb-4 text-primary"
                  ></li>
                  <li v-else class="fa fa-shopping-basket mb-4 text-muted"></li>
                  <li>
                    <h12
                      v-if="menuStore.menu == 'umkm'"
                      class="form-label text-primary"
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMenuStore } from "@/stores/menuMonograph";

const menuStore = useMenuStore();

function menuMonograph() {
  menuStore.changeMenu("monograph");
}

function menuKemiskinan() {
  menuStore.changeMenu("kemiskinan");
}

function menuStunting() {
  menuStore.changeMenu("stunting");
}

function menuUmkm() {
  menuStore.changeMenu("umkm");
}
</script>
