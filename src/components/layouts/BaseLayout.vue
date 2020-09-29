<template>
  <div class="layout">
    <div class="header">
      SSR
    </div>

    <div class="container">
      <div class="table">
        <slot></slot>
      </div>

      <div v-if="isOpen" class="info">
        <slot name="info"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  props: {
    isOpen: {
      type: Boolean,
    }
  }
}
</script>

<style lang="scss">
.layout {

  .header {
    background: #42b983;
    font-weight: bold;
    padding: 20px;

    height: 20px;
  }

  .container {
    display: flex;
    height: calc(100vh - 60px);

    .table {
      flex: 2;
    }

    .info {
      background: #c6f8e1;
      flex: 400px;
    }
  }

}
</style>
