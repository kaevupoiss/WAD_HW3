<template>
  <div class="home">
    <Header />
    <div class="posts-container">
      <Post v-for="post in posts" :key="post" :post="post" />
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
    posts() {
      return this.$store.state.posts;
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
</style>
