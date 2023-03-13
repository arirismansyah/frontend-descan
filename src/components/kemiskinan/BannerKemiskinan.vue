<template>
  <!-- PAGE-HEADER -->
  <div class="page-header mt-0 mb-2">
    <div>
      <h1 class="page-title">Kemiskinan</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="javascript:void(0);">Elements</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
      </ol>
    </div>
    <div class="ms-auto pageheader-btn">
      <a
        href="javascript:void(0);"
        class="btn btn-primary btn-icon text-white me-2"
      >
        <span>
          <i class="fe fe-plus"></i>
        </span>
        Add Account
      </a>
      <a href="javascript:void(0);" class="btn btn-success btn-icon text-white">
        <span>
          <i class="fe fe-log-in"></i>
        </span>
        Export
      </a>
    </div>
  </div>
  <!-- PAGE-HEADER END -->

  <!-- BANNER JUMLAH KELUARGA MISKIN -->
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h6 class="">Total Sales</h6>
              <h3 class="mb-2 number-font">34,516</h3>
              <p class="text-muted mb-0">
                <span class="text-primary"
                  ><i class="fa fa-chevron-circle-up text-primary me-1"></i>
                  3%</span
                >
                last month
              </p>
            </div>
            <div class="col col-auto">
              <div
                class="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto"
              >
                <i class="fe fe-trending-up text-white mb-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h6 class="">Total Leads</h6>
              <h3 class="mb-2 number-font">56,992</h3>
              <p class="text-muted mb-0">
                <span class="text-secondary"
                  ><i class="fa fa-chevron-circle-up text-secondary me-1"></i>
                  3%</span
                >
                last month
              </p>
            </div>
            <div class="col col-auto">
              <div
                class="counter-icon bg-danger-gradient box-shadow-danger brround ms-auto"
              >
                <i class="icon icon-rocket text-white mb-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h6 class="">Total Profit</h6>
              <h3 class="mb-2 number-font">$42,567</h3>
              <p class="text-muted mb-0">
                <span class="text-success"
                  ><i class="fa fa-chevron-circle-down text-success me-1"></i>
                  0.5%</span
                >
                last month
              </p>
            </div>
            <div class="col col-auto">
              <div
                class="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto"
              >
                <i class="fe fe-dollar-sign text-white mb-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h6 class="">Total Cost</h6>
              <h3 class="mb-2 number-font">$34,789</h3>
              <p class="text-muted mb-0">
                <span class="text-danger"
                  ><i class="fa fa-chevron-circle-down text-danger me-1"></i>
                  0.2%</span
                >
                last month
              </p>
            </div>
            <div class="col col-auto">
              <div
                class="counter-icon bg-success-gradient box-shadow-success brround ms-auto"
              >
                <i class="fe fe-briefcase text-white mb-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
