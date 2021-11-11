<template>
  <div class="contact">
    <Header />
    <div class="contacts-content">
      <h1>Contact Us</h1>
      <div class="contact-single">
        <span class="material-icons-outlined">email</span>
        <span class="contact-single-text">support@sticky.com</span>
      </div>
      <div class="contact-single">
        <span class="material-icons-outlined">call</span>
        <span class="contact-single-text">+372 5112 3321</span>
      </div>
      <div class="contact-single">
        <span class="material-icons-outlined">location_on</span>
        <span class="contact-single-text">Narva mnt 20, Tartu</span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact",
  components: { Header, Footer },
};
</script>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: $grey50;
}

.contacts-content {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 10rem 10rem;
  height: 100%;
  width: 100%;
  margin-top: 5rem;
  max-width: 50rem;

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 700;
    color: $blue500;
    grid-column: span 3;
  }
}

.contact-single {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;

  .material-icons-outlined {
    background-color: $blue500;
    color: $white;
    padding: 1rem;
    border-radius: 50%;
    font-size: 4rem;
  }
}
</style>
