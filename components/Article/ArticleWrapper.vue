<template>
  <div class="py-5">
    <div id="article" class="container">
      <p class="text-center landing-title">Artikel</p>

      <div v-if="paper.length >= 3" class="row">
        <div
          v-for="index of 3"
          :key="index + 'paper'"
          class="col-md-4 px-2 d-flex justify-content-center"
        >
          <div class="card card-article">
            <!-- <div class="img-article">
              {{ paper[index - 1].article_image }}
            </div> -->
            <div class="card-body">
              <h5 class="card-title text-center fs-4" style="height: 76px;">
                {{ paper[index - 1].article_title }}
              </h5>
              <p class="card-text" style="font-size: 16px; height: 345px;">
                {{ paper[index - 1].article_content.slice(0, 50) }}
              </p>
              <p class="text-muted">Senin, 20 Oktober 2023</p>
              <RouterLink to="/article" class="btn btn-primary-hmif w-100">Selengkapnya</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-center mt-5">
        <RouterLink to="/article" class="text-primary link-divisi"
          >Selengkapnya
          <i class="fas fa-arrow-right" style="font-size: 14px;"></i
        ></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paper: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/get_article"
        );

        // console.log(res.data.original.data);
        this.paper = res.data.original.data;
      } catch (error) {}
    }
  }
};
</script>

<style scoped>
.img-article {
  width: 100%;
  height: 240px;
  background-color: red;
}

.card-article {
  width: 320px !important;
  height: 560px !important;
}
</style>
