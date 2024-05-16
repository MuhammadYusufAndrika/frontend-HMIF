<template>
  <div class="py-5" style="background-color: #f2f2f2 !important">
    <div class="container">
      <div id="visi">
        <p class="text-center visi-misi-title">
          VISI MISI
        </p>
        <p class="visi-misi-subtitle">VISI</p>
        <p class="visi-misi-text">• Menjadikan HMIF yang dikenal dan dibutuhkan oleh Mahasiswa informatika dalam mengembangkan diri dan melaksanakan Tri dharma perguruan tinggi
          <!-- {{ visi }} -->
        </p>
      </div>
      <div id="misi">
        <p class="visi-misi-subtitle">MISI</p>
        <P class="visi-misi-text">• Menjadikan himpuban mahasiswa informatika sebagai wadah untuk menampung aspirasi mahasiswa</P>
        <p class="visi-misi-text">• Menjadikan HMIF sebagai wadah Advokasi dari hasil aspirasi Mahasiswa Informatika </p>
        <P class="visi-misi-text">• Menjadikan HMIF sebagai wadah Informasi dari Mahasiswa Informatika</P>
      <!-- <div
          v-for="(data, index) of misi"
          :key="index + '-misi'"
          class="d-flex"
        >
          <i class="fas fa-check text-danger mt-1" style="font-size: 20px;"></i>
          <p class="visi-misi-text ms-2">
            {{ data }}
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visi: "",
      misi: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/get_visimisi/1"
        );

        // console.log(res.data.original.data.visimisi_misi);
        this.visi = res.data.original.data.visimisi_visi;
        // this.misi = res.data.original.data.visimisi_misi;
        const temp_array = res.data.original.data.visimisi_misi.split("|");
        this.misi = temp_array;

        console.log(this.misi);
      } catch ({ response }) {
        console.log(response);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.visi-misi-title {
  font-weight: 500;
  font-size: 40px;

  color: #500009;
}

.visi-misi-subtitle {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.5);
}

.visi-misi-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}
</style>
