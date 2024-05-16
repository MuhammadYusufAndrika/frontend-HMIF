<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        Division
      </div>
      <div class="card-body">
        <div class="mb-3">
          <RouterLink to="/admin/divisions/add" class="btn btn-primary"
            >Add Division</RouterLink
          >
        </div>

        <table class="table" id="divisions-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Division Name</th>
              <th>Period</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <TableItem
              v-for="(division, index) of divisions"
              :key="'division-' + index"
              :division="division"
              :index="index"
              @deleteDivision="deleteDivision($event)"
            />
          </tbody>
        </table>
      </div>
    </div>

    <!-- Delete Modal -->
    <b-modal
      ref="delete-modal"
      hide-footer
      centered
      title="Are you sure want to delete this Division?"
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
import TableItem from "../../../components/Admin/Divisons/TableItem.vue";

export default {
  head() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      title: "Divisions",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Divisions",
          active: true
        }
      ],
      // Period Data and Datatables
      dataTable: null,
      divisions: [],
      temp_id: null
    };
  },
  mounted() {
    if (this.dataTable == null) {
      this.onScriptLoaded();
    }
  },
  methods: {
    async onScriptLoaded() {
      await this.getDivisions();
      setTimeout(function() {
        this.dataTable = $("#divisions-table").DataTable();
      }, 300);
    },

    async destroyTable() {
      const table = $("#divisions-table").DataTable();
      table.destroy();
    },

    async getDivisions() {
      try {
        const res = await this.$axios.get(
          "https://api.hmifamikom.org/api/division",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        this.divisions = res.data.original.data;
      } catch ({ response }) {
        this.$toast.error(response.data.error);
      }
    },

    async deleteDivision(id) {
      this.temp_id = id;
      this.$refs["delete-modal"].show();
    },

    async hideModal() {
      this.$refs["delete-modal"].hide();
      this.temp_id = 0;
    },

    async confirmDelete() {
      const res = await this.$axios.delete(
        "https://api.hmifamikom.org/api/division/doDelete/" + this.temp_id,
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
    }
  },
  components: { TableItem }
};
</script>

<style lang="scss" scoped></style>
