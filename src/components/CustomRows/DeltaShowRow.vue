<template>
  <div>
    {{delta}} %
  </div>
</template>

<script>
export default {
  name: "DeltaShowRow",
  beforeMount() {
    console.log(this.params);
  },
  computed: {
    delta() {
      const {
        salary,
        new_salary,
      } = this.params.data;

      return Number(( Number(new_salary.value) - Number(salary.value) ) / Number(salary.value) * 100);
    }
  }
}
</script>

<style scoped>

</style>
