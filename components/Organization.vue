<template>
  <div class="main-container pb-48 pt-16" id="skills">
    <div class="text-center">
      <h2 class="text-4xl">Organization</h2>
      <small class="text-gray-600 dark:text-gray-400">
        My Organizational Experience
      </small>
    </div>
    <div class="mt-10 md:w-2/3 mx-auto">
      <div
        class="grid grid-cols-5 grid-flow-row gap-4 mt-5"
        v-for="(organization, i) in organiztions"
        :key="i"
      >
        <div class="col-span-1">
          <p class="text-green-500">{{ organization.year }}</p>
        </div>
        <div class="col-span-4">
          <p class="text-xl mb-2">{{ organization.name }}</p>
          <small class="text-gray-600 dark:text-gray-400">
            As {{ organization.position }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    organiztions: [
      {
        year: "2020 - Present",
        name: "HMTI(Himpunan Mahasiswa Teknik Informatika) Politeknik Negeri Banyuwangi",
        position: "Organizer of Software Development Division",
      },
      {
        year: "2017 - 2018",
        name: "GPPA(Gabungan Pelajar Pecinta Alam) Tulungagung",
        position: "Leader",
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