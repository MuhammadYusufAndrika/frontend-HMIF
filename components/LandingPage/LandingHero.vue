<template>
  <section class="py-lg-16 py-5">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row align-items-center">
        <!-- col -->
        <div
          class="col-lg-6 d-block d-lg-none d-flex justify-content-center mb-5"
        >
          <img src="/index/logo-hmif.png" alt="" />
        </div>

        <div class="col-lg-6 mb-6 mb-lg-0">
          <div class="">
            <p class="landing-title" style="font-size: 18px;">Tentang Kami</p>
            <!-- heading -->
            <h1 class="landing-title fw-bold mb-3">
              HMIF Universitas Amikom <br />
              Yogyakarta
            </h1>
            <!-- para -->
            <p class="landing-subtitle pe-lg-10 mb-3">
              HMIF Universitas Amikom Yogyakarta adalah Himpunan mahasiswa program studi Informatika Universitas Amikom Yogyakarta. HMIF Universitas Amikom berfungsi sebagai penyalur aspirasi, informasi, pemberdaya dan pemersatu mahasiswa program Studi Universitas Amikom Yogyakarta.
            </p>
            <!-- btn -->
            <a
              href="https://youtube.com/@hmifamikomyogyakarta7239?si=TMl5w8Rn62nJiVv6"
              style="width: fit-content;"
              class="btn btn-primary-red d-flex align-items-center justify-content-start"
              ><i class="mdi mdi-youtube me-2" style="font-size: 18px;"></i>
              Youtube</a
            >
          </div>
        </div>
        <!-- col -->
        <div class="col-lg-6 d-none d-lg-block mb-5">
          <center>
            <img src="/index/logo-hmif.png" alt="" />
          </center>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing-transparent {
  min-height: calc(100vh - 82.59px);
  height: 100%;
  width: 100%;
  background: rgba(80, 0, 9, 0.5);
}

.landing-title {
  font-size: 48px;
  font-weight: 600;
}

.landing-subtitle {
  font-size: 16px;
  font-weight: 400;
}

.btn-primary-red {
  background-color: #500009;
  color: white;
}
</style>
