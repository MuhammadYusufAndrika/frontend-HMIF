<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ this.title }}
      </div>
      <div class="card-body">
        <div class="mb-3">
          <h5 class="card-title">Photo</h5>
          <img :src="member.member_image_url" />
        </div>
        <div class="mb-3">
          <h5 class="card-title">Status</h5>
          <p>{{ member.member_status }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Name</h5>
          <p>{{ member.member_name }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">NIM</h5>
          <p>{{ member.member_nim }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Address</h5>
          <p>{{ member.member_address }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Email</h5>
          <p>{{ member.member_email }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Phone</h5>
          <p>{{ member.member_phone }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Birthday</h5>
          <p>{{ member.member_birthdate }}</p>
        </div>
        <!-- <div class="mb-3">
          <h5 class="card-title">Status</h5>
          <p>{{ period_status == 1 ? "Active" : "Inactive" }}</p>
        </div> -->
        <div class="mb-0">
          <RouterLink to="/admin/member" class="btn btn-danger"
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
    this.getMembers(this.$route.params.id);
  },

  data() {
    return {
      title: "Detail Member",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Detail Member",
          active: true
        }
      ],

      member: {}
    };
  },

  methods: {
    async getMembers(id) {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/member/detail/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        console.log(res);
        this.member = res.data.original.data;
      } catch ({ response }) {
        this.$toast.error(response.data.error);
      }
    }
  }
};
</script>

<style></style>
