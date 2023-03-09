<template>
  <body>
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
                <div class="col-md-12 col-lg-12">
                  <HeaderSummary></HeaderSummary>
                </div>
              </div>
              <!-- ROW-0 -->

              <!-- ROW-1 OPEN - BANNER -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <DescSummary></DescSummary>
                </div>
              </div>
              <!-- ROW-1 CLOSED -->

              <!-- ROW-2 OPEN - ADMINISTRASI -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <AdministrasiSummary></AdministrasiSummary>
                </div>
              </div>
              <!-- ROW-2 CLOSED -->

              <!-- ROW-3 OPEN -->
              <div class="row">
                <div class="col-md-8 col-lg-8">
                  <!-- MAP -->
                  <div class="row">
                    <div class="col-md-12 col-lg-12">
                      <MapSummary></MapSummary>
                    </div>
                  </div>
                  <!-- MAP CLOSED -->
                  <!-- PENDIDIKAN -->
                  <div class="row">
                    <div class="col-md-12 col-lg-12">
                      <EduSummary></EduSummary>
                    </div>
                  </div>
                  <!-- PENDIDIKAN CLOSED -->
                </div>
                <!-- DEMOGRAFI -->
                <div class="col-md-4 col-lg-4 d-flex align-items-stretch">
                  <DemographSummary></DemographSummary>
                </div>
                <!-- DEMOGRAFI CLOSED -->
              </div>
              <!-- ROW-3 CLOSED -->

              <!-- ROW-4 OPEN -->
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <EmploySummary></EmploySummary>
                </div>
              </div>
              <!-- ROW-4 CLOSED -->
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
</script>
