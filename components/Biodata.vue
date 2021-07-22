<template>
  <div class="main-container w-full h-full py-48">
    <div class="text-center mb-10">
      <h2 class="text-4xl">Introduce</h2>
      <small class="text-gray-600 dark:text-gray-400"> This is me </small>
    </div>

    <div class="md:flex h-full items-center w-full md:w-3/4 mx-auto">
      <div class="flex md:mr-5 mb-4 md:mb-0">
        <div class="inline-block border-2 border-green-400 p-5 mx-auto">
          <div class="w-56 h-56">
            <img src="/foto2.jpg" alt="" class="rounded-xl object-cover w-72" />
          </div>
        </div>
      </div>
      <div class="md:flex-1">
        <h3 class="text-2xl">
          Hi, My name is
          <span class="font-bold text-green-400">Rohmad</span> Kurniadi
        </h3>
        <h4 class="text-gray-600 dark:text-gray-400 text-xl mb-3">
          a.k.a logixode
        </h4>
        <p>
          Experienced Frontend Developer with demonstrated history of working as
          a Freelancer for almost 2 years. Skilled in Javascript like Vue.js,
          Nuxt.js, Node.js, also Tailwind CSS for Website Development and
          Flutter for Mobile App Development.
        </p>
      </div>
    </div>
    <!-- <div class="h-52 w-52 bg-white" id="profile-image"></div> -->
    <!-- <p>Name : Rohmad Kurniadi</p> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
#profile-image {
  transform: skewX(2);
}
</style>