<template>
  <div class="footer">
    <span class="copyright">&copy; Sticky 2021</span>
    <router-link class="footer-link" to="/contact">Contact us</router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  display: flex;
  width: 100%;
  padding: 2rem;
  background-color: $grey900;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 10px 0px rgba($color: $grey500, $alpha: 0.2);
  z-index: 1;
}

.copyright {
  color: $grey200;
}

.footer-link {
  text-transform: uppercase;
  text-decoration: none;
  color: $white;
}
</style>
