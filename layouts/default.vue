<template>
  <div class="min-h-screen">
    <AppBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    let dark = localStorage.getItem("dark") || true;
    this.$store.commit("setTheme", JSON.parse(dark));
    document.documentElement.className = JSON.parse(dark) ? "dark" : "light";
  },
  computed: {
    isDark: {
      set() {
        this.$store.commit("darkThemeToogle");
      },
      get() {
        return this.$store.state.dark;
      },
    },
  },
};
</script>