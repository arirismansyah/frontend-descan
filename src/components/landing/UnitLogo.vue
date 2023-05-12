<template>
  <div class="card col m-1 py-3">
    <div
      class="card-body px-1 py-1"
      data-bs-placement="top"
      data-bs-toggle="tooltip"
      :title="name"
    >
      <figure
        class="img-responsive overlay overlay-1 hover-scale mb-0"
        :data-bs-original-title="name"
      >
        <a :kode_wilayah="kodeWilayah" v-on:click="toWilayah(kodeWilayah)">
          <img
            class="img-responsive"
            :src="getLogoAssets(kodeWilayah)"
            alt=""
            style="max-height: 80px; width: auto"
          />
          <span class="bg"></span>
        </a>
        <figcaption>
          <small class="mdi md-map from-top"></small>
        </figcaption>
      </figure>
    </div>
    <!--/.card-body -->
  </div>
</template>
<script setup lang="ts">
import { useMenuStore } from "@/stores/menuMonograph";
import { useRouter, RouterLink, useRoute } from "vue-router";
import { useKodeWilayahStore } from "@/stores/kodeWilayah";
import { eventListeners } from "@popperjs/core";

const router = useRouter();
const menuStore = useMenuStore();
const kodeWilayahStore = useKodeWilayahStore();

defineProps({
  kodeWilayah: { type: String },
  name: { type: String },
});
function getLogoAssets(kode: string) {
  return new URL(
    `../../assets/images/kabs-logo/logo${kode}.png`,
    import.meta.url
  ).href;
}

function toWilayah(kodeWilayah: string) {
  kodeWilayahStore.changeKode(kodeWilayah);
  menuStore.changeMenu("monograph");
  router.push({ path: "/monograph/" + kodeWilayah });
}
</script>
