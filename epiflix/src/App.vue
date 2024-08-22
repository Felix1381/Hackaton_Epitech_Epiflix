<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <HeaderVue />
</template>

<script>
import HeaderVue from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderVue,
  },
};
</script>
