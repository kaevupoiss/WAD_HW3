<template>
  <div class="avatar" :style="style">
    <span class="initials">{{ initials }}</span>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    initials: String,
    size: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    style: function () {
      return {
        width: this.size / 16 + "rem",
        height: this.size / 16 + "rem",
        fontSize: this.size / 32 + "rem",
      };
    },
  },
};
</script>

<style lang="scss">
.avatar {
  display: flex;
  background-color: $blue600;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  aspect-ratio: 1;

  span {
    color: $white;
    text-transform: uppercase;
    font-weight: 500;
  }
}
</style>
