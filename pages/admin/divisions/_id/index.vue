<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        <div class="mb-3">
          <h5 class="card-title">Division Name</h5>
          <p>{{ division.division_name }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Division Description</h5>
          <p>{{ division.division_description }}</p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Function</h5>
          <p
            style="white-space: pre-line;"
            v-html="division.division_function"
          ></p>
        </div>
        <div class="mb-3">
          <h5 class="card-title">Programs</h5>
          <ul
            v-if="division.programs && division.programs.length > 0"
            class="activity-feed mb-0"
            style="padding-left: 5px !important;"
          >
            <li
              v-for="(program, index) of division.programs"
              :key="'program-index-' + index"
              class="feed-item"
            >
              <div class="feed-item-list">
                <p class="text-muted mb-1">
                  {{
                    program.program_date != null && program.program_date != ""
                      ? program.program_date
                      : "-"
                  }}
                </p>
                <h5 class="font-size-16">
                  {{
                    program.program_name != null && program.program_name != ""
                      ? program.program_name
                      : "-"
                  }}
                </h5>
                <p class="text-muted">
                  {{
                    program.program_desc != null && program.program_desc != ""
                      ? program.program_desc
                      : "-"
                  }}
                </p>
              </div>
            </li>
          </ul>
          <p v-else>
            -
          </p>
        </div>
        <div class="mb-0">
          <RouterLink to="/admin/divisions" class="btn btn-danger"
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
    this.getDivision(this.$route.params.id);
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

      division: {}
    };
  },

  methods: {
    async getDivision(id) {
      const res = await this.$axios.get(
        "https://api.hmifamikom.org/api/division/detail/" + id
      );

      this.division = res.data.original.data;
    }
  }
};
</script>

<style lang="scss" scoped></style>
