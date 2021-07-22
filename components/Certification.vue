<template>
  <div class="main-container py-48" id="skills">
    <div class="text-center">
      <h2 class="text-4xl">Certification</h2>
      <small class="text-gray-600 dark:text-gray-400">
        Certificate make my experience become valueable
      </small>
    </div>
    <div class="mt-10 md:w-2/3 mx-auto">
      <div
        class="grid grid-cols-5 grid-flow-row gap-4 mt-5"
        v-for="(award, i) in awards"
        :key="i"
      >
        <div class="col-span-1">
          <p class="text-green-500">{{ award.year }}</p>
        </div>
        <div class="col-span-4">
          <p class="text-xl mb-2">{{ award.name }}</p>
          <p class="mb-2">{{ award.organization }}</p>
          <small
            class="text-gray-600 dark:text-gray-400"
            v-if="award.credential_id"
          >
            Credential ID: {{ award.credential_id }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    awards: [
      {
        year: "2019 - 2022",
        name: "Certificate of Competence - Junior Web Developer",
        organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
        credential_id: "58200 2513 4 00034691 2019",
      },
      {
        year: "2020 - 2023",
        name: "Dasar Pemrograman Web",
        organization: "Dicoding Indonesia",
        credential_id: "EYX4RR095XDL",
      },
      {
        year: "2020",
        name: "ASEAN Data Science Explorers Certificate",
        organization: "ASEAN Foundation",
        credential_id: "",
      },
      {
        year: "2021",
        name: "Semifinalis Business Plan Competition",
        organization: "University of Gadjah Mada",
        credential_id: "3504/UN1/FEB/SWPDC/KM/2021",
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