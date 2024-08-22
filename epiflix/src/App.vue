<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <div class="bg-black">
    <HeaderVue />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "./components/FooterSection.vue";
import HeaderVue from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderVue,
    FooterSection,
  },
};
</script>
