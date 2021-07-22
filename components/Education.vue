<template>
  <div class="main-container pb-16 pt-48" id="skills">
    <div class="text-center">
      <h2 class="text-4xl">Education</h2>
      <small class="text-gray-600 dark:text-gray-400">
        My Formal Education Tracking
      </small>
    </div>
    <div class="mt-10 md:w-1/2 mx-auto">
      <div
        class="grid grid-cols-5 grid-flow-row gap-4 mt-5"
        v-for="(school, i) in schools"
        :key="i"
      >
        <div class="col-span-1">
          <p class="text-green-500">{{ school.year }}</p>
        </div>
        <div class="col-span-4">
          <p class="text-xl mb-2">{{ school.name }}</p>
          <p class="mb-2">{{ school.grade }}</p>
          <small
            class="text-gray-600 dark:text-gray-400"
            v-if="school.province"
          >
            {{ school.province }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    schools: [
      {
        year: "2019 - Present",
        name: "Politeknik Negeri Banyuwangi",
        grade: "D3 Teknik Informatika",
        province: "Jawa Timur",
      },
      {
        year: "2016 - 2019",
        name: 'SMK "SORE" Tulungagung',
        grade: "Teknik Komputer & Jaringan (TKJ)",
        province: "Jawa Timur",
      },
      {
        year: "2013 - 2016",
        name: "SMPN 2 Kauman",
        grade: "Sekolah Menengah Pertama",
        province: "Jawa Timur",
      },
      {
        year: "2007 - 2013",
        name: "MI Al-Muhajirin Denpasar",
        grade: "Sekolah Dasar",
        province: "Bali",
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