<script>
export default {
  mounted() {
    // document.body.classList.remove("white-bg");
  }
};
</script>

<template>
  <div
    class="h-100vh"
    :class="{ 'regist-height': this.$route.path == '/register' }"
    style="overflow: hidden"
  >
    <Nuxt />
  </div>
</template>

<style scoped>
.regist-height {
  min-height: 860px;
}
</style>
