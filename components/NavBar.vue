<template>
  <div class="">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav
      class="
        dark:bg-gray-bg
        bg-white
        w-screen
        fixed
        top-0
        left-0
        z-10
        h-20
        flex
      "
    >
      <div
        class="
          main-container
          w-full
          border-b-4 border-green-400
          md:border-none
          dark:bg-gray-bg
          bg-white
          my-0
          md:my-auto
          self-center
        "
      >
        <div class="relative flex items-center h-16 justify-center">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Hamburger Menu -->
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-white
              "
              @click="showNavList"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              sm:items-stretch
              sm:justify-start
            "
          >
            <div class="flex-shrink-0 flex items-center">
              <a href="#main">
                <img
                  class="logo transition-transform w-auto"
                  src="/logo.png"
                  alt="Logo"
                  v-if="isDark"
                />
                <img
                  class="logo transition-transform w-auto"
                  src="/logo-black.png"
                  alt="Logo"
                  v-else
                />
              </a>
            </div>
          </div>
          <div class="flex-1 hidden sm:block sm:ml-6">
            <div class="flex space-x-4 justify-center">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link
                class="hover:text-green-500 px-3 py-2 rounded-md font-medium"
                v-for="(nav, i) in navs"
                :key="i"
                :to="nav.path"
                :class="route == nav.path ? 'text-green-500' : ''"
              >
                <span v-html="route == nav.path ? `‹ ${nav.menu} ›` : nav.menu">
                </span>
              </nuxt-link>
            </div>
          </div>
          <div
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              sm:static
              sm:inset-auto
              sm:ml-6
              sm:pr-0
            "
          >
            <div class="ml-3 relative flex items-center">
              <!-- <font-awesome-icon
              :icon="['fas', 'sun']"
              class="theme-toogler mr-2"
            /> -->
              <input
                type="checkbox"
                class="
                  border-2
                  relative
                  w-11
                  h-6
                  transition-all
                  duration-200
                  ease-in-out
                  bg-gray-200
                  border-gray-200
                  checked:bg-gray-400
                  checked:border-gray-400
                  rounded-full
                  shadow-inner
                  outline-none
                  appearance-none
                "
                v-model="isDark"
                :checked="isDark"
              />
              <font-awesome-icon
                :icon="['fas', 'moon']"
                class="theme-toogler ml-2"
              />
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu" v-if="navList">
          <div class="pt-2 pb-3 space-y-1" @click="showNavList">
            <!-- Current: "bg-gray-900 text-white", Default: " hover:bg-gray-700 hover:text-white" -->
            <nuxt-link
              class="block px-3 py-2 rounded-md text-base font-medium"
              v-for="(nav, i) in navs"
              :key="i"
              :to="nav.path"
            >
              {{ nav.menu }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-20 w-screen"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    navs: [
      {
        menu: "Home",
        path: "/",
      },
      {
        menu: "Profile",
        path: "/#profile",
      },
      {
        menu: "Skills",
        path: "/#skills",
      },
      {
        menu: "Portfolio",
        path: "/portfolio",
      },
      {
        menu: "Contact",
        path: "/#contact",
      },
    ],
    navList: false,
  }),
  mounted() {
    console.log(this.$route);
  },
  computed: {
    route() {
      return this.$route.fullPath;
    },
    isDark: {
      set() {
        this.$store.commit("darkThemeToogle");
      },
      get() {
        return this.$store.state.dark;
      },
    },
  },
  methods: {
    showNavList() {
      this.navList = !this.navList;
    },
  },
};
</script>

<style scoped>
input:before {
  content: "";
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: scale(0.9);
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: 0.2s ease-in-out;
}

/* input:checked {
  @apply: bg-indigo-400;
  background-color: #7f9cf5;
} */

input:checked:before {
  left: 1.25rem;
}
</style>