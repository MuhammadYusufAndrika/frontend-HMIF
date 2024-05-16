<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        Period
      </div>
      <div class="card-body">
        <div class="mb-3">
          <RouterLink to="/admin/period/add" class="btn btn-primary"
            >Add Period</RouterLink
          >
        </div>

        <table class="table" id="periods-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Period</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <TableItem
              v-for="(data, index) of periods"
              :key="index + '-index-period'"
              :data="data"
              :index="index + 1"
              @deletePeriod="deletePeriod($event)"
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
import TableItem from "../../../components/Admin/Period/TableItem.vue";

export default {
  head() {
    return {
      title: `${this.title}`
    };
  },

  components: {
    TableItem
  },

  mounted() {
    if (this.dataTable === null) {
      this.onScriptLoaded();
    }
  },

  data() {
    return {
      title: "Period",
      items: [
        {
          text: "Master Data"
        },
        {
          text: "Period",
          active: true
        }
      ],
      // Period Data and Datatables
      dataTable: null,
      periods: [],

      temp_id: null
    };
  },

  methods: {
    async onScriptLoaded() {
      await this.getPeriods();
      setTimeout(function() {
        this.dataTable = $("#periods-table").DataTable();
      }, 300);
    },

    async destroyTable() {
      const table = $("#periods-table").DataTable();
      table.destroy();
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

    async deletePeriod(e) {
      this.temp_id = e;
      this.$refs["delete-modal"].show();
    },

    async confirmDelete() {
      const res = await this.$axios.delete(
        "https://api.hmifamikom.org/api/period/doDelete/" + this.temp_id,
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

<style></style>
