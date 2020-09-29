<template>
  <div id="app">
    <BaseLayout :is-open="isOpen">
      <TableGrid
        @open-info="handleOpenInfo"
        @close-info="handleCloseInfo"
      />

      <template v-slot:info>
        <base-info
          :info="info"
          @close-info="handleCloseInfo"
        />
      </template>
    </BaseLayout>
  </div>
</template>

<script>
import TableGrid from "./components/TableGrid";
import BaseLayout from "./components/layouts/BaseLayout";
import BaseInfo from "./components/BaseInfo";

export default {
  name: 'app',
  data() {
    return {
      isOpen: false,
      info: null,
    }
  },
  methods: {
    handleOpenInfo(info) {
      this.info = info;
      this.isOpen = true;
    },
    handleCloseInfo() {
      this.isOpen = false;
      this.info = null;
    }
  },
  components: {
    BaseInfo,
    BaseLayout,
    TableGrid,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
}
</style>
