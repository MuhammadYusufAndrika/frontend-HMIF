<template>
  <div class="col-xl-3 col-lg-4 p-3">
    <div class="card">
      <div class="card-header bg-transparent border-bottom">
        <h3 class="mb-0">Divisi</h3>
      </div>
      <div class="card-body">
        <div class="mail-list mt-2">
          <a
            v-for="(division, index) of divisions"
            :key="'index-divisi-' + index"
            href="javascript:void(0)"
            class="active"
            @click="$emit('detailDivision', division.division_id)"
          >
            <i
              v-if="division.division_icon == null"
              class="mdi mdi-arrow-right me-2"
            ></i>
            <i v-else :class="division.division_icon + ' me-2'"></i>
            {{ division.division_name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    divisions: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
