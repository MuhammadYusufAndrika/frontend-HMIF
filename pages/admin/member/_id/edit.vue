<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ this.title }}
      </div>
      <div class="card-body">
        <form @submit.prevent="submitMember()">
          <div class="mb-3">
            <label for="member_image" class="form-label">Member Image</label>
            <input
              class="form-control"
              type="file"
              id="member_image"
              accept="image/*"
            />
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
            <label for="division_id" class="form-label">Divisi</label>
            <multiselect
              v-model="division_id"
              :options="divisions"
              label="division_name"
              track-by="division_id"
              class="helo"
            ></multiselect>
          </div>

          <div class="mb-3">
            <label for="structure_id" class="form-label">Struktur</label>
            <multiselect
              v-model="structure_id"
              :options="structures"
              label="structure_name"
              track-by="structure_id"
              class="helo"
            ></multiselect>
          </div>

          <div class="mb-3">
            <label for="member_name" class="form-label">Member Name</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': error_member_name }"
              id="member_name"
              v-model="member_name"
            />
            <div class="invalid-feedback">
              {{ error_member_name_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="member_nim" class="form-label">Member Nim</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': error_member_nim }"
              id="member_nim"
              v-model="member_nim"
            />
            <div class="invalid-feedback">
              {{ error_member_nim_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="member_birthdate" class="form-label"
              >Member Birthdate</label
            >
            <date-picker
              v-model="member_birthdate"
              :first-day-of-week="1"
              lang="en"
              confirm
            ></date-picker>
          </div>

          <div class="mb-3">
            <label for="member_address" class="form-label"
              >Member Address</label
            >
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': error_member_address }"
              id="member_address"
              v-model="member_address"
            />
            <div class="invalid-feedback">
              {{ error_member_address_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="member_phone" class="form-label">Member Phone</label>
            <input
              type="number"
              class="form-control"
              :class="{ 'is-invalid': error_member_phone }"
              id="member_phone"
              v-model="member_phone"
            />
            <div class="invalid-feedback">
              {{ error_member_phone_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="member_email" class="form-label">Member Email</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': error_member_email }"
              id="member_email"
              v-model="member_email"
            />
            <div class="invalid-feedback">
              {{ error_member_email_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="member_password" class="form-label"
              >Member Password</label
            >
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': error_member_password }"
              id="member_password"
              v-model="member_password"
            />
            <div class="invalid-feedback">
              {{ error_member_password_msg }}
            </div>
          </div>

          <div class="mb-3">
            <label for="member_status" class="form-label"
              >Member is Active?</label
            >
            <div class="form-check form-switch form-switch-lg" dir="ltr">
              <input
                type="checkbox"
                class="form-check-input"
                id="customSwitchsizemd"
                :checked="member_status"
                @change="changeStatusMember"
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
import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  head() {
    return {
      title: `${this.title}`
    };
  },

  components: {
    Multiselect,
    DatePicker
  },

  data() {
    return {
      title: "Edit Member",

      items: [
        {
          text: "Master Data"
        },
        {
          text: "Edit Member",
          active: true
        }
      ],

      // Data
      periods: [],
      divisions: [],
      structures: [],

      // Inputted Data
      period_id: 0,
      division_id: 0,
      structure_id: 0,
      member_name: "",
      member_status: 0,
      member_nim: "",
      member_address: "",
      member_birthdate: "",
      member_image: "",
      member_phone: "",
      member_email: "",
      member_password: "",

      error_member_name: "",
      error_member_status: 0,
      error_member_nim: "",
      error_member_address: "",
      error_member_birthdate: "",
      error_member_image: "",
      error_member_phone: "",
      error_member_email: "",
      error_member_password: "",

      error_member_name_msg: "",
      error_member_status_msg: 0,
      error_member_nim_msg: "",
      error_member_address_msg: "",
      error_member_birthdate_msg: "",
      error_member_image_msg: "",
      error_member_phone_msg: "",
      error_member_email_msg: "",
      error_member_password_msg: ""
    };
  },

  async mounted() {
    this.getPeriods();
    this.getDivisions();
    await this.getStructures();

    this.getDetailMember(this.$route.params.id);
  },

  methods: {
    async getDetailMember(id) {
      const res = await this.$axios.get(
        "https://api.hmifamikom.org/api/member/detail/" + id
      );

      const data = res.data.original.data;
      // console.log(data);

      this.period_id = this.periods.filter(item => {
        return item.period_id == data.period_id;
      })[0];

      this.division_id = this.divisions.filter(item => {
        return item.division_id == data.division_id;
      })[0];

      this.structure_id = this.structures.filter(item => {
        return item.structure_id == data.structure_id;
      })[0];

      this.member_name = data.member_name;
      this.member_status = data.member_status;
      this.member_nim = data.member_nim;
      this.member_address = data.member_address;
      this.member_birthdate = new Date(data.member_birthdate);
      this.member_image = data.member_image;
      this.member_phone = data.member_phone;
      this.member_email = data.member_email;
      this.member_password = data.member_password;
    },

    async submitMember() {
      var member_status_up = "inactive";
      if (this.member_status == 1) {
        member_status_up = "active";
      }

      try {
        const res = await this.$axios.post(
          "https://api.hmifamikom.org/api/member/doUpdate/" +
            this.$route.params.id,
          {
            period_id: this.period_id.period_id,
            division_id: this.division_id.division_id,
            structure_id: this.structure_id.structure_id,
            member_name: this.member_name,
            member_status: member_status_up,
            member_nim: this.member_nim,
            member_address: this.member_address,
            member_birthdate: this.$dayjs(this.member_birthdate).format(
              "YYYY-MM-DD"
            ),
            member_image: this.member_image,
            member_phone: this.member_phone,
            member_email: this.member_email,
            member_password: this.member_password
          }
        );

        if (res.data.original.meta.code == 200) {
          this.$toast.success(res.data.original.meta.message);
          this.$router.push("/admin/member");
        } else {
          this.$toast.error(res.data.original.meta.message);
        }
      } catch ({ response }) {
        this.$toast.error(response.data.original.meta.message);
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
    },

    async getDivisions() {
      const res = await this.$axios.get(
        "https://api.hmifamikom.org/api/get_division?period_active=1"
      );

      this.divisions = res.data.original.data;
    },

    async getStructures() {
      const res = await this.$axios.get(
        "https://api.hmifamikom.org/api/structure"
      );

      this.structures = res.data.original.data;
    },

    async changeStatusMember() {
      if (this.member_status == 1) {
        this.member_status = 0;
      } else {
        this.member_status = 1;
      }
    }
  }
};
</script>

<style></style>
