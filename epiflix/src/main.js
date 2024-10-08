import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import "./assets/tailwind.css";

createApp(App).use(createPinia()).use(router).mount("#app");
