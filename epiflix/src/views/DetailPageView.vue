<template>
  <div class="w-screen h-screen bg-black-500">
    <router-link :to="{ path: '/' }" custom v-slot="{ navigate }">
      <a href=""
        ><img class="p-12" src="../assets/Logo.webp" alt="" @click="navigate"
      /></a>
    </router-link>
    <div class="flex justify-center gap-8 p-16">
      <img
        width="820"
        height="450"
        class="rounded-t-lg"
        :src="`${this.imagePath}${movieStore.movie.backdrop_path}`"
        alt=""
      />
      <!-- <iframe
        class="border rounded-2xl"
        width="920"
        height="450"
        src="https://www.youtube.com/embed/nsSV5V4p2E4"
      >
      </iframe> -->
      <!-- <video src="https://youtu.be/s0UmdrNwEy8?si=dQ_CSUxeJco3Q_uF">LOM</video>
      <video
        class="w-1/2 border rounded-2xl"
        controls
        src="https://youtu.be/s0UmdrNwEy8?si=dQ_CSUxeJco3Q_uF"
      >
        <source type="video/mp4" />
        <source src="/home/cherif/Videos" type="video/ogg" />
        Your browser does not support HTML video.
      </video> -->

      <div class="flex flex-col justify-between w-1/2 p-4 leading-normal">
        <h5 class="mb-2 text-5xl font-bold tracking-tight text-[red]">
          {{ movieStore.movie.title }}
        </h5>
        <p class="mb-3 text-xl text-white-700 dark:text-white">
          <!-- La Reine du Sud est un thriller dramatique inspiré du roman de Arturo
          Pérez-Reverte. L'histoire suit Teresa Mendoza, une jeune femme
          mexicaine qui, après la mort de son compagnon impliqué dans le trafic
          de drogue, se voit forcée de fuir vers les États-Unis. Là, elle
          utilise son intelligence et son audace pour gravir les échelons du
          monde du crime et devenir l'une des figures les plus redoutées et
          respectées du narcotrafic. -->
          {{ movieStore.movie.overview }}
        </p>
        <p class="mb-3 text-xl text-white-700 dark:text-white">
          Date de sortie: {{ movieStore.movie.release_date }}
        </p>
        <svg
          width="157"
          height="33"
          viewBox="0 0 157 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 4L17.7555 14.0193L28.2903 14.0193L19.7674 20.2115L23.0229 30.2307L14.5 24.0385L5.97711 30.2307L9.23257 20.2115L0.709681 14.0193L11.2445 14.0193L14.5 4Z"
            fill="#FFD600"
          />
          <path
            d="M46.5 3L49.7555 13.0193L60.2903 13.0193L51.7674 19.2115L55.0229 29.2307L46.5 23.0385L37.9771 29.2307L41.2326 19.2115L32.7097 13.0193L43.2445 13.0193L46.5 3Z"
            fill="#FFD600"
          />
          <path
            d="M78.5 2L81.7555 12.0193L92.2903 12.0193L83.7674 18.2115L87.0229 28.2307L78.5 22.0385L69.9771 28.2307L73.2326 18.2115L64.7097 12.0193L75.2445 12.0193L78.5 2Z"
            fill="#FFD600"
          />
          <path
            d="M110.5 1L113.755 11.0193L124.29 11.0193L115.767 17.2115L119.023 27.2307L110.5 21.0385L101.977 27.2307L105.233 17.2115L96.7097 11.0193L107.245 11.0193L110.5 1Z"
            fill="#FFD600"
          />
          <path
            d="M142.5 3.23607L144.804 10.3283L145.029 11.0193H145.755L153.213 11.0193L147.18 15.4025L146.592 15.8295L146.816 16.5205L149.121 23.6127L143.088 19.2295L142.5 18.8024L141.912 19.2295L135.879 23.6127L138.184 16.5205L138.408 15.8295L137.82 15.4025L131.787 11.0193L139.245 11.0193H139.971L140.196 10.3283L142.5 3.23607Z"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
    <p class="flex justify-center m-4 text-2xl text-white">
      Quelques avis de nos utilisateurs
    </p>
    <div class="flex justify-center m-2">
      <a
        href="#"
        class="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-gray-700 dark:withe:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"
        >
          Bonkey
        </h5>
        <p class="font-normal text-gray-700 dark:text-black-400">
          Captivant et Intense: Beaucoup de spectateurs s'accordent à dire que
          le film est palpitant, avec un rythme soutenu qui garde l'attention du
          début à la fin. Les rebondissements sont souvent inattendus et
          ajoutent à l'intensité de l'intrigue.
        </p>
      </a>
      <a
        href="#"
        class="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-gray-700 dark:withe:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"
        >
          Cherifou
        </h5>
        <p class="font-normal text-gray-700 dark:text-black-400">
          Captivant et Intense: Beaucoup de spectateurs s'accordent à dire que
          le film est palpitant, avec un rythme soutenu qui garde l'attention du
          début à la fin. Les rebondissements sont souvent inattendus et
          ajoutent à l'intensité de l'intrigue.
        </p>
      </a>
      <a
        href="#"
        class="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-gray-700 dark:withe:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"
        >
          Felix
        </h5>
        <p class="font-normal text-gray-700 dark:text-black-400">
          Captivant et Intense: Beaucoup de spectateurs s'accordent à dire que
          le film est palpitant, avec un rythme soutenu qui garde l'attention du
          début à la fin. Les rebondissements sont souvent inattendus et
          ajoutent à l'intensité de l'intrigue.
        </p>
      </a>
    </div>
  </div>
</template>
<script>
import { useMovieStore } from "@/store/movie";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import DetailPageView from "@/views/DetailPageView.vue";
export default {
  name: "DetaiPageView",
  component: {
    DetailPageView,
  },
  data: () => ({
    imagePath: "https://image.tmdb.org/t/p/w500",
  }),
  setup() {
    const movieStore = useMovieStore();
    const route = useRoute();

    onMounted(() => {
      movieStore.getMoviesDetail(route.params.id);
    });
    return {
      movieStore,
    };
  },
  // methods: {
  //   showPost(movietId) {
  //     // Simple GET request using fetch
  //     fetch(`https://api.themoviedb.org/3/movie/${movietId}`)
  //       .then((response) => response.json())
  //       .then((data) => (this.movie = data));
  //   },
  // },
  // mounted() {
  //   this.showPost(this.$route.params.id);
  //},
};
</script>
