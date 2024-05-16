<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ this.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="submitDivision()">
          <div class="mb-3">
            <label for="division_name" class="form-label">Division</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': error_division_name }"
              id="division_name"
              v-model="division_name"
            />
            <div class="invalid-feedback">
              {{ error_division_name_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="division_description" class="form-label"
              >Division Desc</label
            >
            <input
              type="text"
              class="form-control"
              id="division_description"
              v-model="division_description"
            />
          </div>

          <div class="mb-3">
            <label for="division_function" class="form-label"
              >Division Function</label
            >
            <ckeditor v-model="division_function" :editor="editor"></ckeditor>
          </div>

          <div class="mb-3">
            <label for="period_id" class="form-label">Period</label>
            <multiselect
              v-model="period_id"
              :options="periods"
              label="period_name"
              track-by="period_id"
              class="helo"
            ></multiselect>
          </div>

          <div class="mb-3">
            <label for="division_icon" class="form-label"
              >Division Icon (mdi, font awesome, etc)</label
            >
            <input
              type="text"
              class="form-control"
              id="division_icon"
              v-model="division_icon"
            />
          </div>

          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Multiselect from "vue-multiselect";
import "vue2-datepicker/index.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  head() {
    return {
      title: `${this.title}`
    };
  },

  components: {
    ckeditor: CKEditor.component,
    Multiselect
  },

  data() {
    return {
      title: "Add Division",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Add Division",
          active: true
        }
      ],

      division_name: "",
      division_description: "",
      division_function: "",
      division_icon: "",
      period_id: 0,

      error_division_name: 0,
      error_division_name_msg: "",

      editor: ClassicEditor,

      //   Period
      periods: []
    };
  },

  mounted() {
    this.getPeriods();
  },

  methods: {
    async submitDivision() {
      if (this.period_id != 0 && this.division_name != "") {
        const res = await this.$axios.post(
          "https://api.hmifamikom.org/api/division/store",
          {
            division_name: this.division_name,
            division_description: this.division_description,
            division_function: this.division_function,
            division_icon: this.division_icon,
            period_id: this.period_id.period_id
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        if (res.data.original.meta.code == 200) {
          this.$router.push("/admin/divisions");
          this.$toast.success(res.data.original.meta.message);
        } else {
          this.$toast.error(res.data.original.data[0]);
          this.error_division_name = 1;
          this.error_division_name_msg = res.data.original.data[0];
        }
      } else {
        this.$toast.error("Division Name and Period is Required");
      }
    },

    async getPeriods() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/period",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        this.periods = res.data.original.data;
      } catch ({ response }) {
        this.$toast.error(response.data.error);
      }
    }
  }
};
</script>

<style></style>
