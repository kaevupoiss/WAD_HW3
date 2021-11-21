<template>
  <div class="login">
    <Header :is-disabled="true" />
    <div class="login-card">
      <h1 class="logo">Sticky</h1>
      <InputText
        class="login-input"
        v-model="loginForm.username"
        :placeholder="'Username'"
      />
      <InputText
        class="login-input"
        v-model="loginForm.password"
        :placeholder="'Password'"
      />
      <button class="button" @click="login()">Log in</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import InputText from "@/components/InputText.vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Footer, Header, InputText },
  name: "Login",
  data: function () {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;

  width: 100%;
  //height: 100%;

  background-color: $grey50;

  align-items: center;
  justify-content: center;
}

.login-card {
  display: flex;
  padding: 2rem;
  margin: 20.38vh;
  //margin: 9.95%;
  width: 100%;
  max-width: 25rem;
  flex-direction: column;
  background-color: $white;
  height: max-content;

  border-radius: 1rem;
  row-gap: 1rem;

  align-items: center;

  box-shadow: 0 0 20px 0 rgba($color: $grey400, $alpha: 0.3);

  .logo {
    font-size: 4rem;
    margin: 3rem 0;
  }

  .button {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: $blue500;
    color: $white;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    cursor: pointer;

    transition: 0.3s background-color ease;

    &:hover {
      background-color: $blue600;
    }
  }
}
</style>
