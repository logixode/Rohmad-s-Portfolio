<template>
  <div class="" id="main">
    <Sosmed class="left-0 ml-7" v-if="route == 'index'" />
    <Sosmed class="right-0 mr-7 mt-5 z-2" v-if="route == 'index'" />
    <MainPage />
    <div class="relative z-1 bg-gray-100 dark:bg-gray-800" id="profile">
      <Biodata />
    </div>
    <div class="relative z-1 bg-white dark:bg-gray-bg" id="profile">
      <Skills />
      <div class="main-container pb-48" id="skills">
        <div class="text-center">
          <h2 class="text-4xl">Portfolio</h2>
          <small class="text-gray-600 dark:text-gray-400"> My last work </small>
        </div>
        <div class="h-full items-center w-full mx-auto">
          <div
            v-for="(portfolio, i) in portfolios"
            :key="i"
            class="md:flex py-12"
            :class="i % 2 != 0 ? 'flex-row-reverse' : ''"
          >
            <div
              class="flex md:mr-5 mb-4 md:mb-0"
              :class="i % 2 == 0 ? 'md:mr-5' : 'md:ml-5'"
            >
              <img
                :src="portfolio.img"
                alt=""
                class="rounded-xl h-full md:h-72"
              />
            </div>
            <div class="md:flex-1 self-center">
              <h3 class="text-2xl mb-2">
                {{ portfolio.title }}
              </h3>
              <p>
                {{ portfolio.description }}
              </p>
              <p class="text-gray-600 dark:text-gray-400 my-3">
                Build with {{ portfolio.build_with }}
              </p>

              <a
                :href="portfolio.open_source"
                class="bg-green-400 inline-block px-3"
              >
                <span class="text-white dark:text-gray-bg">
                  <template v-if="portfolio.open_source">
                    Open Source
                  </template>
                  <template v-else> Close Source </template>
                </span>
              </a>
            </div>
          </div>
          <nuxt-link
            class="
              text-xl text-green-500
              dark:text-green-400
              uppercase
              border-b-2 border-green-500
              dark:border-green-400
            "
            to="/portfolio"
          >
            See All Projects...
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="relative z-1 bg-gray-100 dark:bg-gray-800">
      <Certification />
    </div>
    <div class="relative z-1 bg-white dark:bg-gray-bg" id="profile">
      <Education />
      <Organization />
    </div>
  </div>
</template>

<script>
import Penghargaan from "../components/Certification.vue";
import Organization from "../components/Organization.vue";
export default {
  components: { Penghargaan, Organization },
  data: () => ({
    portfolios: [
      {
        title: "Kuesioner Eksternal IDUKA (Industri & Dunia Kerja) Poliwangi",
        description:
          "Kuesioner Eksternal IDUKA (Industri Dunia Kerja) Poliwangi adalah sebuah website survey yang digunakan untuk mendata para lulusan Poliwangi khususnya Prodi TI (Teknik Informatika) dan TPHT (Teknik Pengolahan Hasil Ternak) yang telah bekerja pada suatu perusahaan.",
        build_with: "Vue.js",
        img: "/img/portfolio/portf1.jpg",
        open_source: false,
      },
      {
        title: "Kandang Kommunal",
        description:
          "Kandang Kommunal adalah sebuah website yang terintegrasi dengan perangkat IoT yang digunakan untuk memonitoring dan mengelola sapi dengan memperoleh data dari perangkat IoT yang dikirim langsung setiap minggunya untuk melakukan kontrol secara langsung untuk mengetahui tingkat kesehatan dan tingkat layak nya sapi untuk dijual.",
        build_with: "Laravel & Vue.js",
        img: "/img/portfolio/portf2.jpg",
        open_source: false,
      },
      {
        title: "Bantuan Diri (Self Help)",
        description:
          "Bantuan diri (Self Help) Perencanaan Pendidikan Lanjutan adalah Aplikasi yang membantu peserta didik dalam memahami kepribadian, kecerdasan, minat, dan pilihan pendidikan lanjutan setelah lulus dari MTs (Madrasah Tsanawiyah).",
        build_with: "Flutter",
        img: "/img/portfolio/portf3.jpg",
        open_source: false,
      },
      {
        title: "Hoki Smartlamp",
        description:
          "Hoki Smartlamp merupakan inovasi lampu hias berbasis Internet Of Things pertama dengan bahan dasar limbah bambu dan kayu yang bermotif unik serta mengedepankan kearifan lokal, kontrol hoki smart lamp melalui aplikasi. Ini lebih dari sekedar cara yang berbeda untuk mengontrol pencahayaan di rumah anda.",
        build_with: "PWA Vue.js",
        img: "/img/portfolio/portf4.jpg",
        open_source: "https://github.com/hoki-smartlamp-com/SmartLamp-PKMV",
      },
      {
        title: "Jintarkop (Jemuran Pintar Kopi)",
        description:
          "Jintarkop (Jemuran Pintar Kopi) adalah aplikasi berbasis iOT menggunakan teknologi PWA yang digunakan untuk memantau tingkat kekeringan pada kopi.",
        build_with: "PWA Vue.js",
        img: "/img/portfolio/portf5.jpg",
        open_source: "https://github.com/logixode/JintarKop",
      },
    ],
  }),
  mounted() {
    console.log(this.$route);
  },
  computed: {
    route() {
      return this.$route.name;
    },
  },
};
</script>

<style>
</style>