<template>
  <div>
    <nav
      class="container pt-5 pb-2"
      style="--bs-breadcrumb-divider: '>'; ;"
      aria-label="breadcrumb "
    >
      <ul class="breadcrumb text-center align-items-center">
        <ul class="breadcrumb-item">
          <RouterLink to="/">Home</RouterLink>
        </ul>
        <ul class="breadcrumb-item active" aria-current="page">
          Kabar Informatika
        </ul>
      </ul>
    </nav>
    <div class="container">
      <p class="landing-title fw-bold">KABAR INFORMATIKA</p>
      <div class="row">
        <div class="col-lg-9">
          <NewsItem
            v-for="(data, index) of news"
            :key="'news-' + index"
            :data="data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from "../../components/News/Item/NewsItem.vue";

export default {
  layout: "landing",
  data() {
    return {
      title: "Kabar Informatika",
      news: []
    };
  },
  head() {
    return {
      title: `${this.title}`
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/get_news"
        );

        this.news = res.data.original.data;
      } catch (error) {}
    }
  },
  auth: false
};
</script>

<style lang="scss" scoped></style>
