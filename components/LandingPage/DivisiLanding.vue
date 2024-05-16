<template>
  <div class="py-5">
    <div class="container">
      <div id="divisi">
        <div>
          <p class="text-center landing-title">Divisi</p>
          <p class="text-center landing-title-2">
            HMIF Amikom Yogyakarta <br />
            memiliki 4 Divisi
          </p>
          <p class="visi-misi-text"> Keorganisasian </p> <br>
          <p class="visi-misi-text"> Penelitian Keilmuan dan Pengembangan </p> <br>
          <p class="visi-misi-text"> Hubungan Masyarakat </p> <br>
          <p class="visi-misi-text"> Aspirasi dan Advokasi </p> <br>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <RouterLink to="/division" class="text-primary link-divisi"
              >Selengkapnya
              <i class="fas fa-arrow-right" style="font-size: 14px;"></i
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

