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
          Artikel
        </ul>
      </ul>
    </nav>
    <div class="container">
      <p class="landing-title fw-bold">ARTIKEL</p>
      <div class="row">
        <div class="col-lg-9">
          <ArticleItem
            v-for="(data, index) of artikel"
            :key="'article-' + index"
            :data="data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from "../../components/Article/Item/ArticleItem.vue";

export default {
  layout: "landing",
  data() {
    return {
      title: "Artikel",
      artikel: []
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
          "https://api.hmifamikom.org/api/get_article"
        );

        this.artikel = res.data.original.data;
      } catch (error) {}
    }
  },
  components: { ArticleItem },
  auth: false
};
</script>

<style lang="scss" scoped></style>
