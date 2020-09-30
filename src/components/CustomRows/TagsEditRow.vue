<template>
  <div>
    <select v-model="value" multiple size="2">
      <option value="пересмотр в августе">Пересмотр в августе</option>
      <option value="ожидал большего">Ожидал большего</option>
      <option value="риск ухода">Риск ухода</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TagsEditRow",
  data() {
    return {
      value: null
    }
  },
  beforeMount() {
    this.value = this.params.value;
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

<style scoped>

</style>
