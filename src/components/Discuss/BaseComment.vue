<template>
  <div :class="['comment', `status-${status}`]">
    <div class="headline">
      <span class="author">{{ author }}</span>
      <span class="datetime">{{ dateTime }}</span>
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseComment",
  props: {
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    dateTime: {
      type: String,
    }
  }
}
</script>

<style scoped lang="scss">
  .comment {
    overflow: hidden;
    background: #fff;
    padding: 0px 20px;
    border-radius: 4px;
    margin-bottom: 10px;

    &.status-accept {
      border-left: 3px solid #42b983;
    }

    .headline {
      .author {
        font-weight: 500;
      }

      .datetime {
        font-weight: 300;
        margin-left: 10px;
        font-size: 12px;
      }
    }

    .text {
      white-space: normal;
      line-height: 17px;
      padding-bottom: 14px;
    }
  }
</style>
