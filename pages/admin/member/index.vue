<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        Member
      </div>
      <div class="card-body">
        <div class="mb-3">
          <RouterLink to="/admin/member/add" class="btn btn-primary"
            >Add Member</RouterLink
          >
        </div>

        <table class="table" id="members-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Period</th>
              <th>NIM</th>
              <th>Names</th>
              <th>Division</th>
              <th>Telp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, index) of members" :key="'member-' + index">
              <td>{{ index + 1 }}</td>
              <td>{{ member.period_name }}</td>
              <td>{{ member.member_nim }}</td>
              <td>{{ member.member_name }}</td>
              <td>{{ member.division_name }}</td>
              <td>{{ member.member_phone }}</td>
              <td>
                <RouterLink
                  :to="'/admin/member/' + member.member_id"
                  class="btn btn-sm btn-success"
                >
                  <i class="mdi mdi-eye-check-outline"></i> Detail
                </RouterLink>

                <RouterLink
                  :to="'/admin/member/' + member.member_id + '/edit'"
                  class="btn btn-sm btn-warning"
                >
                  <i class="mdi mdi-pencil"></i> Edit
                </RouterLink>

                <button
                  @click="deleteMember(member.member_id)"
                  class="btn btn-sm btn-danger"
                >
                  <i class="mdi mdi-trash-can-outline"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <b-modal
      ref="delete-modal"
      hide-footer
      centered
      title="Are you sure want to delete this Period?"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto
        minima incidunt sequi omnis quo ex, maiores praesentium id magni?
      </p>
      <div class="d-block text-center">
        <button @click="hideModal" class="btn btn-danger">
          Cancel
        </button>
        <button @click="confirmDelete" class="btn btn-primary">Delete</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Member",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Member",
          active: true
        }
      ],
      dataTable: null,

      members: [],
      temp_id: 0
    };
  },

  mounted() {
    if (this.dataTable == null) {
      this.onScriptLoaded();
    }
  },

  methods: {
    async onScriptLoaded() {
      await this.getMembers();
      setTimeout(function() {
        this.dataTable = $("#members-table").DataTable();
      }, 300);
    },

    async destroyTable() {
      const table = $("#members-table").DataTable();
      table.destroy();
    },

    async getMembers() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/member",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        console.log(res);
        this.members = res.data.original.data;
      } catch ({ response }) {
        this.$toast.error(response.data.error);
      }
    },

    async deleteMember(id) {
      this.temp_id = id;
      this.$refs["delete-modal"].show();
    },

    async confirmDelete() {
      const res = await this.$axios.delete(
        "https://api.hmifamikom.org/api/member/doDelete/" + this.temp_id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      if (res.data.original.meta.code == 200) {
        this.$toast.success(res.data.original.meta.message);
        this.hideModal();
        this.destroyTable();
        this.onScriptLoaded();
      } else {
        this.hideModal();
        this.$toast.error(res.data.original.data[0]);
      }
    },

    async hideModal() {
      this.$refs["delete-modal"].hide();
    }
  }
};
</script>

<style lang="scss" scoped></style>
