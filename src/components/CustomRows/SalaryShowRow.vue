<template>
   <div :class="['currency', `status-${params.value.status}`]">
     <div v-if="params.value.status" class="comment">
       <span v-if="isAgreed">&#128578</span>
       <span v-else>&#128488</span>
     </div>

     {{ params.value | currency() }}
   </div>
</template>

<script>
export default {
  filters: {
    currency({value, currency}) {
      let result = Number(value);
      if (!isNaN(value)) {
          result = Number(value).toFixed(0);
      }
      return currency ? `${currency} ${result}` : result;
    }
  },
  computed: {
    isAgreed() {
      return this.params.value.status === 'agreed';
    }
  }
}
</script>

<style scoped lang="scss">
.currency {
  color: #42b983;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  &.status-agreed {
    background: lemonchiffon;
  }

  &.status-discussion {
    background: azure;
  }

  &.status-updated {
    background: greenyellow;
  }

  .comment {
    margin-right: 10px;
  }
}
</style>
