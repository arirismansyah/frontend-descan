<template>
  <div class="page bg-primary">
    <div class="">
      <!-- CONTAINER OPEN -->
      <div class="container">
        <div class="row text-center mx-auto">
          <div
            class="col-lg-8 col-sm-12 center-block align-items-center construction"
          >
            <div class="text-white">
              <div class="card-body mt-6 mt-sm-0">
                <h1 class="display-2 mb-0 fw-semibold">Coming Soon</h1>
                <div id="launch_date"></div>
                <p>modul under constructions</p>
                <h4><strong>Contact:</strong> Tim IT BPS Prov. SUMSEL</h4>
                <div class="mt-5">
                  <button @click="goHome()" class="btn btn-icon" type="button">
                    <span class="btn-inner--icon"
                      ><i class="fa fa-home"></i
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CONTAINER CLOSED -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { useRouter, RouterLink, useRoute } from "vue-router";
const router = useRouter();
const themeStore = useThemeStore();
function goHome() {
  router.push({ name: "home" });
}
</script>
