<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Bantuan</h3>
    </div>
    <div class="card-body">
      <div class="panel panel-primary">
        <div class="wideget-user-tab">
          <div class="tab-menu-heading">
            <div class="tabs-menu1">
              <!-- Tabs -->
              <ul class="nav">
                <li>
                  <a
                    href="#diagramBantuan"
                    class="active me-1"
                    data-bs-toggle="tab"
                    >Diagram</a
                  >
                </li>
                <li>
                  <a href="#tabelBantuan" data-bs-toggle="tab" class="me-1"
                    >Table</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body tabs-menu-body">
          <div class="tab-content">
            <div class="tab-pane active" id="diagramBantuan">
              <!-- chart Bantuan kesejahteraan -->
              <ChartBantuan></ChartBantuan>
            </div>
            <div class="tab-pane" id="tabelBantuan">
              <!-- chart Bantuan kesejahteraan -->
              Table
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChartBantuan from "./ChartBantuan.vue";
</script>
