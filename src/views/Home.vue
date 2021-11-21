<template>
  <div class="home">
    <Header />
    <div class="posts-container">
      <Post v-for="(post, i) in posts" :key="'post' + i" :post="post" />
    </div>
    <div class="reset-likes">
      <span class="material-icons" @click="ResetLikes"> heart_broken </span>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: { Header, Footer, Post },
  computed: {
    posts: function () {
      return this.$store.state.posts;
    },
  },
  methods: {
    ResetLikes: function () {
      this.$store.dispatch({
        type: "ResetLikesAct",
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: $grey50;
}

.posts-container {
  padding: 2rem 0;

  display: flex;
  flex-direction: column;

  row-gap: 1.5rem;

  width: 100%;
  height: 100%;
  max-width: 50rem;
}

.reset-likes {
  position: fixed;
  left: 4rem;
  top: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;

  color: $white;
  user-select: none;
  cursor: pointer;

  background-color: $blue300;
  border-radius: 50%;

  transition: 0.3s background-color ease, 0.3s box-shadow ease;

  box-shadow: 0 0 10px 0 rgba($color: $grey500, $alpha: 0.5);

  &:hover {
    background-color: $blue500;
    box-shadow: 0 0 15px 0 rgba($color: $grey500, $alpha: 0.8);
  }
}
</style>
