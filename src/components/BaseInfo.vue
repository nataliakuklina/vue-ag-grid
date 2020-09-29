<template>
  <div class="info-block">
    <h2>Сотрудник: {{ info.employee }}</h2>
    <button @click="handleClose">close</button>
    <h3>Информация по пересмотру</h3>
    <p>
      Актуальная зп: {{ info.salary | salaryFilter }}
    </p>
    <p>
      Пересмотр зп: {{ info.new_salary | salaryFilter }}
    </p>
    <p v-if="info.tags.length">
      Теги: {{ info.tags.join(', ') }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    info: {
      type: Object,
    }
  },
  methods: {
    handleClose() {
      this.$emit('close-info');
    }
  },
  filters: {
    salaryFilter({value, currency}) {
      return `${currency} ${value}`;
    }
  }
}
</script>

<style scoped lang="scss">
.info-block {
  padding: 30px;
}
</style>
