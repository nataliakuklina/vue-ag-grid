<template>
  <div v-if="comments">
    <base-comment v-for="(comment, index) in comments"
                  :key="index"
                  :author="comment.author"
                  :date-time="comment.datetime"
                  :text="comment.text"
                  :status="comment.status"
    />
  </div>
</template>

<script>
import BaseComment from "./BaseComment";
export default {
  name: "PrevComments",
  components: {BaseComment},
  props: {
    comments: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
