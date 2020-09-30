<template>
  <div>
    <comments-list :comments="comments"></comments-list>

    <input v-model="comment"
           type="text"
           placeholder="Комментарий..."
    />
  </div>
</template>

<script>
import CommentsList from '../Discuss/CommentsList'
export default {
  name: "CommentsView",
  data() {
    return {
      comment: null,
    };
  },
  props: {
    comments: {
      type: Array,
    }
  },
  components: {
    CommentsList,
  },
}
</script>

<style scoped>

</style>
