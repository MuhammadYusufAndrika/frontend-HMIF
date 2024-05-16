<template>
  <div class="py-5">
    <nav
      class="container "
      style="--bs-breadcrumb-divider: '>'; ;"
      aria-label="breadcrumb "
    >
      <ul class="breadcrumb text-center align-items-center">
        <ul class="breadcrumb-item">
          <RouterLink to="/">Home</RouterLink>
        </ul>
        <ul class="breadcrumb-item active" aria-current="page">
          Artikel
        </ul>
        <ul class="breadcrumb-item active" aria-current="page">
          Detail Artikel
        </ul>
      </ul>
    </nav>
    <div v-if="detailArticle" class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-8 p-3">
          <div class="card shadow p-3 mb-10 bg-body rounded">
            <div class="card-body">
              <div class="text-date">
                <!-- <h5>
                  <img
                    src="/artikel/IOT.jpeg"
                    class="rounded"
                    alt=""
                    height="20"
                    width="20"
                  />
                  Ahmad Muhardian · 28 Mar 2023
                </h5> -->
              </div>
              <div class="card-text py-3">
                <h1 class="fw-bold">
                  {{ detailArticle.article_title }}
                </h1>
              </div>

              <hr />

              <div class="text-center">
                <img
                  src="/artikel/IOT.jpeg"
                  class="rounded"
                  alt="Cinque Terre"
                  width="680"
                  height="400"
                />
              </div>
              <div class="card-text py-3">
                <span
                  class="article-text"
                  v-html="detailArticle.article_content"
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "landing",

  data() {
    return {
      detailArticle: {}
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/get_article/" + this.$route.params.id
        );

        console.log(res);
        this.detailArticle = res.data.original.data;
      } catch (error) {}
    }
  },
  auth: false
};
</script>

<style lang="scss" scoped>
.article-title {
  font-size: 24px;
  font-weight: 600;
}

.article-text {
  font-size: 16px;
  color: #666;
}
</style>
