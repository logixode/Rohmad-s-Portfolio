<template>
  <div class="main-container h-screen">
    <div class="flex h-full items-center">
      <div class="flex-1 relative -z-2">
        <div class="border-b-4 border-green-400 inline-block mb-5">
          <h2 class="text-4xl mb-1">I'am</h2>
        </div>
        <h1 class="text-7xl mb-5">Rohmad Kurniadi</h1>
        <div class="bg-green-400 inline-block px-3 py-1 mb-7">
          <h3 class="text-2xl text-white dark:text-gray-bg">
            Frontend Developer
          </h3>
        </div>

        <p class="leading-loose dark:text-gray-300 tracking-wide mb-7">
          Design to code & code to design. <br />From zero to hero, from nothing
          into beautiful things.
          <!-- Berpengalaman lebih dari 1 tahun sebagai Frontend Developer dengan
          bekerja menggunakan Framework Vue.js dan didukung dengan Framework
          lain seperti Tailwind CSS, Bootstrap, dll. dan juga Flutter dalam
          pengembangan Aplikasi Mobile. Berkomitmen untuk menjadi Frontend
          Developer yang baik dan tertarik dengan berbagai hal yang berkaitan
          dengan visual seperti design dan photography. -->
        </p>

        <a
          href="#profile"
          class="
            text-xl text-green-500
            dark:text-green-400
            uppercase
            border-b-2 border-green-500
            dark:border-green-400
          "
        >
          Get to know me...
        </a>
      </div>

      <div class="relative z-3">
        <div class="mr-52 bg-white dark:bg-gray-bg inline-block p-6 shadow-2xl">
          <div class="w-56">
            <img src="/foto.jpg" alt="" class="h-72 rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute b-0 left-0"></div>

    <div class="h-full absolute bottom-0 right-0 flex z-2">
      <img src="/bg-foto.jpg" alt="" class="h-full relative left-16" />
      <div class="h-full w-16 bg-green-400 opacity-60"></div>
      <div class="h-full w-16 bg-green-400"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>