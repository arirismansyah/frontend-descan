<template>
  <v-app :theme="theme">
    <!-- NAVBAR -->
    <v-app-bar>
      <template v-slot:prepend>
        <img height="45" src="@/assets/images/logo/logo.png" />
        <v-app-bar-title class="mx-4">Desa Bumi Sriwijaya</v-app-bar-title>
      </template>

      <v-toolbar-items>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Pilih Wilayah</v-btn>

        <v-divider vertical></v-divider>

        <v-btn variant="text">Peta Tematik</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        :icon="fullscreen === 'true' ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
        @click="fullScreenBrowser()"
      ></v-btn>

      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="changeTheme()"
      ></v-btn>
    </v-app-bar>
    <!-- NAVBAR -->

    <v-main>
      <!-- SUB NAV WILAYAH -->
      <SubNav></SubNav>
      <!-- SUB NAV WILAYAH -->

      <!-- MAIN CONTENT -->
      <v-container fluid ma-0 pa-0 fill-height>
        <!-- row 1 -->
        <v-row>
          <!-- SIDE CONTENT -->
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <v-card loading="" title="Card title" text="..."></v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card loading="" title="Card title" text="..."></v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card loading="" title="Card title" text="..."></v-card>
              </v-col>
            </v-row>
          </v-col>
          <!-- SIDE CONTENT -->

          <!-- MAIN CONTENT -->
          <v-col cols="9"> <MenuStunting></MenuStunting> </v-col>
          <!-- MAIN CONTENT -->
        </v-row>
        <!-- row 1 -->
      </v-container>
      <!-- MAIN CONTENT -->
    </v-main>

    <!-- FOOTER -->
    <v-footer>
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} - BPS Provinsi Sumatera Selatan
        </v-col>
      </v-row>
    </v-footer>
    <!-- FOOTER -->
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SubNav from "@/components/navigation/SubNav.vue";
import MonographMain from "@/components/layouts/monograph-contents/MonographMain.vue";
import MenuKemiskinan from "@/components/layouts/monograph-contents/MenuKemiskinan.vue";
import MenuStunting from "@/components/layouts/monograph-contents/MenuStunting.vue";

const theme = ref("light");
const fullscreen = ref("false");

function changeTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

function fullScreenBrowser() {
  fullscreen.value = fullscreen.value === "true" ? "false" : "true";
}

// import { MenuKemiskinan } from "./monograph-contents/MenuKemiskinan.vue";
</script>
