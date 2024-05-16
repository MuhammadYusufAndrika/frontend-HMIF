<script>
import { mapState } from "vuex";

export default {
  name: "vertical",
  head() {
    return {
      script: [
        {
          src:
            "https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap4.min.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap4.min.css"
        }
      ]
    };
  },
  created() {
    document.body.removeAttribute("data-layout");
    document.body.removeAttribute("data-topbar");
  },
  mounted() {
    document.body.classList.remove("authentication-bg");
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        this.$router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        this.$router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    }
  },
  data() {
    return {};
  },
  computed: mapState(["layout"])
};
</script>

<template>
  <!-- Begin page -->
  <div id="layout-wrapper">
    <Topbar />
    <Sidebar :type="layout.leftSidebarType" :width="layout.layoutWidth" />
    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content" style="min-height: 100vh;">
        <div class="container-fluid">
          <Nuxt />
        </div>
      </div>
      <!-- End Page-content -->
      <Footer />
    </div>
    <!-- end main content-->
  </div>
  <!-- END layout-wrapper -->
</template>
