<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Tingkat Kemiskinan</h3>
    </div>
    <div class="card-body">
      <div class="panel panel-primary">
        <div class="tab-menu-heading">
          <div class="tabs-menu1">
            <!-- Tabs -->
            <ul class="nav panel-tabs">
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
        <div class="panel-body tabs-menu-body">
          <div class="tab-content">
            <div class="tab-pane active" id="diagramTingkat">
              <p>
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
            </div>
            <div class="tab-pane" id="tabelTingkat">
              <p>
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
