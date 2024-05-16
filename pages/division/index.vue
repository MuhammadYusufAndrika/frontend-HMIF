<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <SideDivision
          :divisions="divisions"
          @detailDivision="detailDivision($event)"
        />

        <div class="col-xl-9 col-lg-8 p-3">
          <div class="card">
            <div class="card-header bg-transparent border-bottom">
              <h3 class="mb-0">{{ detail_division.division_name }}</h3>
            </div>
            <div class="card-body">
              <div>
                <h4 class="">Deskripsi</h4>
                <p>{{ detail_division.division_description }}</p>
              </div>

              <hr />

              <div>
                <h4 class="">Fungsi dan Pesan</h4>
                <p
                  style="white-space: pre-line;"
                  v-html="detail_division.division_function"
                ></p>
              </div>

              <hr />

              <div class="mb-3">
                <h5 class="card-title">Programs</h5>
                <ul
                  v-if="
                    detail_division.programs &&
                      detail_division.programs.length > 0
                  "
                  class="activity-feed mb-0"
                  style="padding-left: 5px !important;"
                >
                  <li
                    v-for="(program, index) of detail_division.programs"
                    :key="'program-index-' + index"
                    class="feed-item"
                  >
                    <div class="feed-item-list">
                      <p class="text-muted mb-1">
                        {{
                          program.program_date != null &&
                          program.program_date != ""
                            ? program.program_date
                            : "-"
                        }}
                      </p>
                      <h5 class="font-size-16">
                        {{
                          program.program_name != null &&
                          program.program_name != ""
                            ? program.program_name
                            : "-"
                        }}
                      </h5>
                      <p class="text-muted">
                        {{
                          program.program_desc != null &&
                          program.program_desc != ""
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideDivision from "../../components/Division/SideDivision.vue";

export default {
  layout: "landing",
  data() {
    return {
      divisions: [],
      detail_division: {}
    };
  },
  async mounted() {
    await this.getDivisions();

    this.detailDivision(this.divisions[0].division_id);
  },
  methods: {
    async getDivisions() {
      const res = await this.$axios.get(
        "https://api.hmifamikom.org/api/get_division?period_active=1"
      );

      this.divisions = res.data.original.data;
    },

    async detailDivision(id) {
      const res = await this.$axios.get(
        "https://api.hmifamikom.org/api/get_division/" + id
      );

      this.detail_division = res.data.original.data;
    }
  },
  components: { SideDivision },
  auth: false
};
</script>

<style lang="scss" scoped>
hr {
  color: black !important;
}
</style>
