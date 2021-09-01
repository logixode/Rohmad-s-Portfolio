<template>
  <div class="main-container pb-28 pt-48 text-center" id="skills">
    <h2 class="text-4xl">Skills</h2>
    <small class="text-gray-600 dark:text-gray-400"
      >What's I can work with</small
    >
    <div class="mt-5 w-4/5 mx-auto">
      <a
        v-for="(skill, i) in skills"
        :key="i"
        :href="skill.link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          :src="
            skill.alt == 'Nodejs' && isDark
              ? '/img/skills/node-dark.svg'
              : skill.img
          "
          :alt="skill.alt"
          class="h-12 mx-3 md:h-16 md:mx-12 my-5 inline-block"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        img: "/img/skills/vue.png",
        alt: "Vuejs",
        link: "https://vuejs.org/",
      },
      {
        img: "/img/skills/nuxt.png",
        alt: "Nuxtjs",
        link: "https://nuxtjs.org/",
      },
      {
        img: "/img/skills/nodejs.png",
        alt: "Nodejs",
        link: "https://nodejs.org/en/",
      },
      {
        img: "/img/skills/js.png",
        alt: "Javascript",
        link: "https://www.javascript.com",
      },
      {
        img: "/img/skills/pwa.svg",
        alt: "PWA",
        link: "https://web.dev/progressive-web-apps/",
      },
      {
        img: "/img/skills/tailwind.svg",
        alt: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        img: "/img/skills/dart.png",
        alt: "Dart",
        link: "https://dart.dev",
      },
      {
        img: "/img/skills/flutter.png",
        alt: "Flutter",
        link: "https://www.flutter.dev/",
      },
      {
        img: "/img/skills/laravel.png",
        alt: "Laravel",
        link: "https://laravel.com",
      },
    ],
  }),
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

<style>
</style>