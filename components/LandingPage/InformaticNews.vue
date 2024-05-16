<template>
  <div class="py-5" style="background-color: #f2f2f2 !important">
    <div class="container">
      <div id="divisi">
        <div>
          <p class="text-center landing-title">Kabar Informatika</p>

          <div class="row">
            <div
              v-for="(data, index) in news"
              :key="index + 'news'"
              class="col-md-4 kabar-height"
            >
              <div class="d-flex align-items-center">
                <div class="kabar-number">{{ index + 1 }}</div>
                <div class="kabar-title ms-3">
                  {{ data.article_title }}
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-center mt-5">
            <RouterLink to="/news" class="text-primary link-divisi"
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
export default {
  data() {
    return {
      news: []
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

        // console.log(res.data.original.data);
        this.news = res.data.original.data;
      } catch (error) {}
    }
  }
};
</script>

<style lang="scss" scoped>
.kabar-height {
  height: 72px;
  display: flex;
  align-items: center;
  margin-top: 48px;
}
.kabar-number {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  color: white;
  background-color: #500009;

  font-weight: 500;

  width: 32px;
  height: 32px;
  border-radius: 16px;
  transition: background-color 300ms ease 0ms;
}
.kabar-title {
  font-weight: 600 !important;
  font-size: 16px;
  color: #000000;
  transition: color 300ms ease 0ms;
}

.kabar-height:hover {
  .kabar-number {
    background-color: #8f0011 !important;
  }

  .kabar-title:hover {
    color: #500009 !important;
  }
}
</style>
