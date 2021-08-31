<template>
  <div class="sosmed">
    <div class="my-5" v-for="(data, i) in sosmed" :key="i">
      <a :href="data.link" target="_blank" rel="noreferrer">
        <font-awesome-icon :icon="['fab', data.icon]" class="sosmed-icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sosmed: [
      {
        link: "https://wa.me/6287886541321",
        icon: "whatsapp",
      },
      {
        link: "https://facebook.com/rohmad.kurniadi.9",
        icon: "facebook",
      },
      {
        link: "https://instagram.com/rk_logixode",
        icon: "instagram",
      },
      {
        link: "https://github.com/logixode",
        icon: "github",
      },
      {
        link: "https://linkedin.com/in/rohmad-kurniadi",
        icon: "linkedin-in",
      },
    ],
  }),
};
</script>