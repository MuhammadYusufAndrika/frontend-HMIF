<script>
/**
 * Footer component
 */
export default {};
</script>

<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">{{ new Date().getFullYear() }} © HMIF.</div>
        <div class="col-sm-6">
          <div class="text-sm-end d-none d-sm-block">
            Crafted with
            <i class="mdi mdi-heart text-danger"></i> by
            <span class="text-reset">HMIF Amikom</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
