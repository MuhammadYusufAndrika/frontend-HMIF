<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ this.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="updatePeriod()">
          <div class="mb-3">
            <label for="period_name" class="form-label">Period</label>
            <input
              type="text"
              class="form-control"
              id="period_name"
              v-model="period_name"
            />
          </div>

          <div class="mb-3">
            <label for="period_name" class="form-label">Is Active?</label>
            <div class="form-check form-switch form-switch-lg" dir="ltr">
              <input
                type="checkbox"
                class="form-check-input"
                id="customSwitchsizemd"
                :checked="period_status"
                @change="changeStatus"
              />
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Update</button>
        </form>
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

  data() {
    return {
      title: "Edit Period",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Edit Period",
          active: true
        }
      ],

      period_name: "",
      period_status: 0,
      period_is_deleted: "0"
    };
  },

  mounted() {
    this.getPeriod(this.$route.params.id);
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
    },

    changeStatus() {
      if (this.period_status == 1) {
        this.period_status = 0;
      } else {
        this.period_status = 1;
      }
    },

    async updatePeriod() {
      const res = await this.$axios.put(
        "https://api.hmifamikom.org/api/period/doUpdate/" +
          this.$route.params.id,
        {
          period_name: this.period_name,
          period_status: this.period_status.toString()
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      if (res.data.original.meta.code == 200) {
        this.$router.push("/admin/period");
        this.$toast.success(res.data.original.meta.message);
      } else {
        // if Error goes Here
      }
    }
  }
};
</script>

<style></style>
