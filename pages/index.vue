<template>
  <div>
    <LandingHero />
    <VisiMisi />
    <DivisiLanding />
    <InformaticNews />
    <ArticleWrapper />
  </div>
</template>

<script>
import LandingHero from "../components/LandingPage/LandingHero.vue";
import VisiMisi from "../components/LandingPage/VisiMisi.vue";
import DivisiLanding from "../components/LandingPage/DivisiLanding.vue";
import InformaticNews from "../components/LandingPage/InformaticNews.vue";
import ArticleWrapper from "../components/Article/ArticleWrapper.vue";

export default {
  layout: "landing",
  head() {
    return {
      title: `${this.title}`
    };
  },
  data() {
    return {
      title: "HMIF Amikom"
    };
  },
  components: {
    LandingHero,
    VisiMisi,
    DivisiLanding,
    InformaticNews,
    ArticleWrapper
  },
  auth: false
};
</script>
