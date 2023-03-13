<template>
  <div class="card" style="background: transparent">
    <div class="card-header">
      <h3 class="card-title">Menu</h3>
    </div>
    <div class="card-body" style="background: transparent">
      <div class="row align-self-center mb-2 mt-2">
        <div class="col-6 col-sm-6 d-flex justify-content-center">
          <button
            @click="menuMonograph()"
            class="btn btn-icon btn-white btn-lg btn-block justify-content-center w-lg py-6 px-2"
            style="height: 100%"
          >
            <span>
              <ul>
                <li class="fe fe-grid mb-4 text-muted"></li>
                <li class="text-muted">
                  <h12 class="form-label">Monograf</h12>
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
                <li class="fa fa-money mb-4 text-muted"></li>
                <li class="text-muted">
                  <h12 class="form-label">Kemiskinan</h12>
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
                <li class="mdi mdi-baby-buggy mb-4 text-muted"></li>
                <li class="text-muted">
                  <h12 class="form-label">Stunting</h12>
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
                <li class="fa fa-shopping-basket mb-4 text-muted"></li>
                <li class="text-muted">
                  <h12 class="form-label">UMKM</h12>
                </li>
              </ul>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menuSelected = ref("monograph");

function menuMonograph() {
  menuSelected.value = "monograph";
  alert(menuSelected.value);
}

function menuKemiskinan() {
  menuSelected.value = "kemiskinan";
  alert(menuSelected.value);
}

function menuStunting() {
  menuSelected.value = "stunting";
  alert(menuSelected.value);
}

function menuUmkm() {
  menuSelected.value = "umkm";
  alert(menuSelected.value);
}
</script>
