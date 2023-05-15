<template>
  <div class="expanel expanel-default" style="width: 100%">
    <div class="expanel-heading">
      <h6 class="text-center">
        <i
          class="fa fa-clock-o float-start text-primary text-primary-shadow"
        ></i
        ><span class="card-title">Periode: </span>
        <span class="text-muted"
          ><strong>
            {{ props.periode_awal_aktif }} s.d.
            {{ props.periode_akhir_aktif }}
          </strong>
        </span>
        <span
          v-if="props.status_aktif == '1'"
          class="badge rounded-pill bg-success mx-4 me-1 mb-1 mt-1"
          >Aktif</span
        >
        <span
          v-else
          class="badge px-4 rounded-pill bg-danger mx-4 me-1 mb-1 mt-1"
          >Tidak Aktif</span
        >
      </h6>
    </div>
    <div class="expanel-body">
      <div class="table-responsive">
        <table class="table border text-nowrap text-md-nowrap mg-b-0">
          <tbody>
            <tr>
              <td><strong>Kepala Daerah</strong></td>
              <td class="text-center">:</td>
              <td>{{ props.nama_ketua }}</td>
            </tr>
            <tr>
              <td><strong> Wakil Kepala Daerah </strong></td>
              <td class="text-center">:</td>
              <td>{{ props.nama_wakil }}</td>
            </tr>
            <tr>
              <td>
                <strong> Sekretaris Daerah </strong>
              </td>
              <td class="text-center">:</td>
              <td>{{ props.nama_sekretaris }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="accordion" id="accordionPengurus">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingPengurusLain">
            <button
              class="accordion-button collapsed active"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapsePengurusLain_' + props.index"
              aria-expanded="false"
              aria-controls="collapsePengurusLain"
            >
              Pengurus Lainnya
            </button>
          </h2>
          <div
            :id="'collapsePengurusLain_' + props.index"
            class="accordion-collapse collapse"
            aria-labelledby="headingPengurusLain"
            data-bs-parent="#accordionPengurus"
            style=""
          >
            <div class="accordion-body">
              <p>
                {{ props.pengurus_lainnya }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  periode_awal_aktif: { type: String },
  periode_akhir_aktif: { type: String },
  status_aktif: { type: String },
  nama_ketua: { type: String },
  nama_wakil: { type: String },
  nama_sekretaris: { type: String },
  pengurus_lainnya: { type: String },
  index: { type: Number },
});
</script>
