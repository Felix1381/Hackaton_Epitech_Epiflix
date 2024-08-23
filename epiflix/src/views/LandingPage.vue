<template>
  <div class="bg-black">
    <HeaderVue />
    <PopularCarousel />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "../components/FooterSection.vue";
import HeaderVue from "../components/HeaderComponent.vue";
import PopularCarousel from "../components/popularCarousel.vue";
export default {
  components: {
    HeaderVue,
    FooterSection,
    PopularCarousel,
  },
};
</script>
