<template>
  <tr>
    <td>{{ index }}</td>
    <td>{{ data.period_name }}</td>
    <td>{{ data.period_status == 1 ? "Active" : "Not Active" }}</td>
    <td>
      <RouterLink
        :to="'/admin/period/' + data.period_id"
        class="btn btn-sm btn-success"
      >
        <i class="mdi mdi-eye-check-outline"></i> Detail
      </RouterLink>

      <RouterLink
        :to="'/admin/period/' + data.period_id + '/edit'"
        class="btn btn-sm btn-warning"
      >
        <i class="mdi mdi-pencil"></i> Edit
      </RouterLink>

      <button
        @click="$emit('deletePeriod', data.period_id)"
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
    data: {
      type: Object
    },

    index: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped></style>
