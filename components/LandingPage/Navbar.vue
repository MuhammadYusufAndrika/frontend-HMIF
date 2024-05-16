<template>
  <nav class="navbar bg-hmif navbar-expand-lg navbar-dark">
    <div class="container">
      <RouterLink to="/" class="navbar-brand fs-3 text-white">
        <img
          src="/index/logo-hmif.png"
          class="me-1"
          width="56"
          height="56"
          alt=""
        />
        HMIF</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-white fs-5 mx-1" href="#"
              >Beranda</RouterLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5 mx-1" href="#">Kepengurusan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5 mx-1" href="#">Bank Soal</a>
          </li>
          <li class="nav-item">
            <RouterLink to="article" class="nav-link text-white fs-5 mx-1"
              >Artikel</RouterLink
            >
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link text-white fs-5 mx-1" href="#">ASPIRASI</a> -->
            <button class="nav-link text-white fs-5 mx-1" href="#">
              Aspirasi
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.active {
  color: rgba(147, 229, 242, 0.9) !important;
}

.nav-link:hover {
  color: rgba(147, 229, 242, 0.9) !important;
}
</style>
