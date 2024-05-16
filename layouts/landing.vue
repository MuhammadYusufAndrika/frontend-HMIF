<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/LandingPage/Navbar.vue";
import Footer from "../components/LandingPage/Footer.vue";

export default {
  components: { Navbar, Footer },
  mounted() {
    this.stayLogin();
  },

  methods: {
    async stayLogin() {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        await this.$auth.setUser(user);
        await this.$auth.$storage.setUniversal("loggedIn", true);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
