<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ this.title }}
      </div>
      <div class="card-body">
        <div class="mb-3">
          <h5 class="card-title">Kepengurusan Periode</h5>
          <p>{{ period_name }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Status</h5>
          <p>{{ period_status == 1 ? "Active" : "Inactive" }}</p>
        </div>
        <div class="mb-0">
          <RouterLink to="/admin/period" class="btn btn-danger"
            >Go Back</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title}`
    };
  },

  mounted() {
    this.getPeriod(this.$route.params.id);
  },

  data() {
    return {
      title: "Detail Period",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Detail Period",
          active: true
        }
      ],

      period_name: "",
      period_status: 0,
      period_is_deleted: "0"
    };
  },

  methods: {
    async getPeriod(id) {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/period/detail/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        this.period_name = res.data.original.data.period_name;
        this.period_status = Number(res.data.original.data.period_status);
        this.period_is_deleted = res.data.original.data.period_is_deleted;
      } catch ({ response }) {
        this.$toast.error(response.data.error);
      }
    }
  }
};
</script>

<style></style>
