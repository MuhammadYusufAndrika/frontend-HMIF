<template>
  <div class="bg-hmif">
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-md-3 px-2 mb-3">
            <h5 class="text-white fs-1">HMIF</h5>
            <p class="text-white fs-5">
              Gedung BSC Lantai 3 Ruang 3<br />
              Universitas Amikom Yogyakarta
            </p>
            <p class="text-white fs-5">
              <span @click="routeToAdmin">©</span> 2023 HMIF. Tim IT
            </p>
          </div>

          <div class="col-md-2 px-2 mb-3">
            <h5 class="text-white fs-1">Contact</h5>
            <table>
              <tr>
                <td><p class="text-white fs-5 mb-0">Phone</p></td>
                <td><p class="text-white fs-5 mb-0">:</p></td>
                <td><p class="text-white fs-5 mb-0">+62 851 6287 1522</p></td>
              </tr>
              <tr>
                <td><p class="text-white fs-5 mb-0">Email</p></td>
                <td><p class="text-white fs-5 mb-0">:</p></td>
                <td><p class="text-white fs-5 mb-0">hmif@amikom.ac.id</p></td>
              </tr>
            </table>
          </div>

          <div class="col-md-2"></div>

          <div class="col-md-2 px-2 mb-3">
            <h5 class="text-white fs-1">Home</h5>
            <ul class="list-group" style="list-style-type: none;">
              <li class="fs-5 text-white">Kepengurusan</li>
              <li class="fs-5 text-white">Bank Soal</li>
              <li class="fs-5 text-white">Artikel</li>
              <li class="fs-5 text-white">Aspirasi</li>
            </ul>
          </div>

          <div class="col-md-3 px-2 mb-3">
            <h5 class="text-white fs-1">Social Media</h5>
            <div>
              <i class="fab fa-instagram text-white fs-3 mx-1"></i>
              <i class="fab fa-whatsapp text-white fs-3 mx-1"></i>
              <i class="fab fa-facebook-square text-white fs-3 mx-1"></i>
              <i class="fab fa-youtube text-white fs-3 mx-1"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routeToAdmin() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style lang="scss" scoped></style>
