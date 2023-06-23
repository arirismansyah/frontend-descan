<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Tingkat Kemiskinan</h3>
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
                    href="#diagramTingkat"
                    class="active me-1"
                    data-bs-toggle="tab"
                    >Diagram</a
                  >
                </li>
                <li>
                  <a href="#tabelTingkat" data-bs-toggle="tab" class="me-1"
                    >Table</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body tabs-menu-body">
          <div class="tab-content">
            <div class="tab-pane active" id="diagramTingkat">
              <!-- chart tingkat kesejahteraan -->
              <ChartKemiskinan></ChartKemiskinan>
            </div>
            <div class="tab-pane" id="tabelTingkat">
              <!-- chart tingkat kesejahteraan -->
              Table
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChartKemiskinan from "./ChartKemiskinan.vue";
</script>
