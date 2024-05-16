<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ division.division_name }}</td>
    <td>{{ division.period_name }}</td>
    <td>
      <RouterLink
        :to="'/admin/divisions/' + division.division_id"
        class="btn btn-sm btn-success"
      >
        <i class="mdi mdi-eye-check-outline"></i> Detail
      </RouterLink>

      <RouterLink
        :to="'/admin/divisions/' + division.division_id + '/edit'"
        class="btn btn-sm btn-warning"
      >
        <i class="mdi mdi-pencil"></i> Edit
      </RouterLink>

      <button
        @click="$emit('deleteDivision', division.division_id)"
        class="btn btn-sm btn-danger"
      >
        <i class="mdi mdi-trash-can-outline"></i> Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    division: {
      type: Object
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped></style>
