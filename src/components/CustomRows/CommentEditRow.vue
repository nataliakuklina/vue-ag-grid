<template>
  <div>
    <div class="float-element">
      <comments-view :comments="comments"/>
    </div>
  </div>
</template>

<script>
import CommentsView from "../Discuss/CommentsView";
export default {
  name: "CommentEditRow",
  components: {CommentsView},
  data() {
    return {
      value: null,
      comments: [],
    };
  },
  beforeMount() {
    this.value = this.params.value;
    this.comments = this.value.comments;
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
    },
  }
}
</script>

<style scoped>
.float-element {
  position: fixed;
  background: #f6f6f6;
  padding: 10px;
  max-height: 400px;
  min-height: 100px;
  overflow: auto;
  width: 300px;
  border-radius: 3px;
  box-shadow: 0px 4px 5px #2f2f2f2e;
}
</style>
