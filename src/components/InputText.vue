<template>
  <div class="input-wrapper">
    <input
      class="input-text"
      type="text"
      :disabled="isDisabled"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: String,
    placeholder: String,
    isDisabled: Boolean,
  },
};
</script>

<style lang="scss">
.input-text {
  width: 100%;
  min-width: 8rem;
  padding: 0.5rem 1rem;
  outline: 0;

  font-size: 0.875rem;

  background-color: $blue50;

  transition: 0.3s background-color ease;

  &:focus {
    background-color: rgba($color: $blue50, $alpha: 0.5);
  }
}

.input-wrapper {
  width: 100%;
  max-width: 50rem;
  border: 2px solid $blue100;
  border-radius: 0.5rem;
  overflow: hidden;

  transition: 0.3s border-color ease;

  &:focus-within {
    border: 2px solid $blue400;
  }
}
</style>
