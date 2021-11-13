<template>
  <div class="post">
    <div class="post-header">
      <Avatar :initials="getInitials" :size="32" />
      <span class="post-creator">{{ post.poster }}</span>
      <span class="post-time">{{ post.time }}</span>
    </div>
    <div class="post-content">
      <img
        v-if="post.image"
        class="image"
        alt="pixel 6"
        :src="require('@/assets/' + post.image)"
      />
      <p>{{ post.text }}</p>
    </div>
    <div class="post-footer">
      <span class="material-icons">favorite</span>
      <span class="like-count">25</span>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  name: "Post",
  props: {
    post: Object,
  },
  components: { Avatar },
  computed: {
    getInitials() {
      let names = this.post.poster.split(" ");
      return names[0][0] + names[names.length - 1][0];
    },
  },
};
</script>

<style lang="scss">
.post {
  display: flex;
  row-gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  background-color: $white;

  box-shadow: 0px 0px 10px 0px rgba($color: $grey400, $alpha: 0.3);
}

.post-header {
  display: grid;
  grid-template-columns: min-content 1fr;
  place-items: center left;
  column-gap: 0.75rem;
  row-gap: 0.25rem;

  .post-creator {
    font-weight: 600;
  }

  .post-time {
    font-weight: 400;
    font-size: 0.875rem;
    color: $grey400;
  }

  .avatar {
    grid-row: span 2;
  }
}

.post-content {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .image {
    border-radius: 1rem;
    width: 100%;
  }

  p {
    line-height: 150%;
  }
}

.post-footer {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  .material-icons {
    color: $blue300;
    cursor: pointer;

    transition: 0.3s color ease;

    &:hover {
      color: $blue500;
    }
  }
}
</style>
