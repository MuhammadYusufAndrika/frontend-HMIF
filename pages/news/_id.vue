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
        <ul class="breadcrumb-item" aria-current="page">
          Kabar Informatika
        </ul>
        <ul class="breadcrumb-item active" aria-current="page">
          Detail Kabar Informatika
        </ul>
      </ul>
    </nav>
    <div v-if="detailnews" class="container">
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
                  {{ detailnews.article_title }}
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
                <span class="berita-text" v-html="detailnews.article_content">
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
      detailnews: {}
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/get_news/" + this.$route.params.id
        );

        console.log(res);
        this.detailnews = res.data.original.data;
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
