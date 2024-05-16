<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ this.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="submitPeriod()">
          <div class="mb-3">
            <label for="period_name" class="form-label">Period</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': error_period_name }"
              id="period_name"
              v-model="period_name"
            />
            <div class="invalid-feedback">
              {{ error_period_name_msg }}
            </div>
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

          <button class="btn btn-primary" type="submit">Submit</button>
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
      title: "Add Period",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Add Period",
          active: true
        }
      ],

      period_name: "",
      period_status: 0,
      period_is_deleted: "0",

      error_period_name: 0,
      error_period_name_msg: ""
    };
  },

  methods: {
    changeStatus() {
      if (this.period_status == 1) {
        this.period_status = 0;
      } else {
        this.period_status = 1;
      }
    },

    async submitPeriod() {
      const res = await this.$axios.post(
        "https://api.hmifamikom.org/api/period/store",
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
        this.$toast.error(res.data.original.data[0]);
        this.error_period_name = 1;
        this.error_period_name_msg = res.data.original.data[0];
      }
    }
  }
};
</script>

<style></style>
