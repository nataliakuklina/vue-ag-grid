<template>
  <div class="salary-edit">
    <select v-model="value.currency">
      <option value="RUB">RUB</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
    <input v-model="value.value"
           type="number" size="10"
           class="base-input">
  </div>
</template>

<script>
export default {
  name: "SalaryEditRow",
  data() {
    return {
      value: null,
    }
  },
  beforeMount() {
    this.value = this.params.value;
  },
  watch: {
    value: {
      deep: true,

      handler(value, oldValue) {
        if (!oldValue) return;

        this.value.status = 'updated';
      }
    }
  },
  methods: {
    getValue() {
      return this.value;
    },

    setValue(newValue) {
      this.value = newValue;
    },

    isCancelBeforeStart() {
      return false;
    },

    isCancelAfterEnd() {
      return false;
    }
  }
}
</script>

<style scoped lang="scss">
.salary-edit {
  padding: 0 10px;
}
.base-input {
  width: 100px;
  margin-left: 10px;
}
</style>
