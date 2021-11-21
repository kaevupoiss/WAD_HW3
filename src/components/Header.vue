<template>
  <div class="header">
    <h1 class="logo" @click="!isDisabled && $router.push({ name: 'Home' })">
      Sticky
    </h1>
    <InputText
      class="search-input"
      v-model="searchText"
      :placeholder="'Search here'"
      :is-disabled="isDisabled"
    />
    <div class="header-actions">
      <router-link
        class="contact-us"
        :is="isDisabled ? 'label' : 'router-link'"
        to="/contact"
        >Contact Us</router-link
      >
      <router-link class="log-out" :to="'/login'">Log Out</router-link>
      <Avatar class="header-avatar" :initials="'RT'" :size="32" />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import InputText from "./InputText.vue";

export default {
  name: "Header",
  props: {
    isDisabled: Boolean,
  },
  components: { Avatar, InputText },
  data: function () {
    return {
      searchText: "",
    };
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: 17rem 1fr 17rem;
  align-items: center;
  width: 100%;
  column-gap: 1.5rem;
  padding: 1rem 4rem;
  background-color: $white;

  box-shadow: 0 0 5px 0px rgba($color: $grey500, $alpha: 0.2);
  z-index: 1;

  .search-input {
    justify-self: center;
  }

  .logo {
    margin-right: auto;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 2rem;

  .log-out,
  .contact-us {
    text-decoration: none;
    color: $grey500;
    text-transform: uppercase;

    transition: 0.3s color ease;

    &:hover {
      color: $blue500;
    }
  }
}
</style>
