<template>
  <div class="">
    <p>{{ statusCode }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message;
    },
  },
};
</script>

<style>
</style>