<template>
  <div class="info-block">
    <h2>
      Сотрудник: {{ info.employee }}
      <button @click="handleClose" style="margin-left: 10px;">x</button>
    </h2>

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

    <comments-view :comments="info.discuss.comments" />
  </div>
</template>

<script>
import CommentsView from "./Discuss/CommentsView";
export default {
  name: "BaseInfo",
  components: {CommentsView},
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
