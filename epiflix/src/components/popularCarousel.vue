<template>
  <div class="flex flex-col ml-0 bg-black p-auto">
    <h1
      class="flex px-0 py-5 mx-0 text-4xl font-bold text-white lg:px-0 md:px-10 lg:mx-0 md:mx-20"
    >
      Films mieux notés
    </h1>
    <div class="flex pb-10 overflow-x-scroll hide-scroll-bar">
      <div
        class="flex ml-0 flex-nowrap lg:ml-0 md:ml-20"
        v-for="(movie, i) in movieStore.moviesTopRated"
        :key="i"
      >
        <div class="inline-block px-3">
          <div
            class="w-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <router-link
              :to="{ path: '/details/' + movie.id }"
              custom
              v-slot="{ navigate }"
            >
              <a v-if="movie.backdrop_path" @click="navigate">
                <img
                  class="object-fill rounded-t-lg"
                  :src="`${this.imagePath}${movie.backdrop_path}`"
                  alt=""
                />
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Films mieux notés -->
  <div class="flex flex-col ml-0 bg-black p-auto">
    <h1
      class="flex px-0 py-5 mx-0 text-4xl font-bold text-white lg:px-0 md:px-10 lg:mx-0 md:mx-20"
    >
      Films Tendances
    </h1>
    <div class="flex pb-10 overflow-x-scroll hide-scroll-bar">
      <div
        class="flex ml-0 flex-nowrap lg:ml-0 md:ml-20"
        v-for="(movie, i) in movieStore.moviesRecents"
        :key="i"
      >
        <div class="inline-block px-3">
          <div
            class="w-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <router-link
              :to="{ path: '/details/' + movie.id }"
              custom
              v-slot="{ navigate }"
            >
              <a v-if="movie.backdrop_path" @click="navigate">
                <img
                  class="object-fill rounded-t-lg"
                  :src="`${this.imagePath}${movie.backdrop_path}`"
                  alt=""
                />
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Populaires -->
  <div class="flex flex-col ml-0 bg-black p-auto">
    <h1
      class="flex px-0 py-5 mx-0 text-4xl font-bold text-white lg:px-0 md:px-10 lg:mx-0 md:mx-20"
    >
      Films Populaires
    </h1>
    <div class="flex pb-10 overflow-x-scroll hide-scroll-bar">
      <div
        class="flex ml-0 flex-nowrap lg:ml-0 md:ml-20"
        v-for="(movie, i) in movieStore.moviesPopular"
        :key="i"
      >
        <div class="inline-block px-3">
          <div
            class="w-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <router-link
              :to="{ path: '/details/' + movie.id }"
              custom
              v-slot="{ navigate }"
            >
              <a v-if="movie.backdrop_path" @click="navigate">
                <img
                  class="object-fill rounded-t-lg"
                  :src="`${this.imagePath}${movie.backdrop_path}`"
                  alt=""
                />
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useMovieStore } from "@/store/movie";
import { onMounted } from "vue";

export default {
  data() {
    return {
      imagePath: "https://image.tmdb.org/t/p/w500",
      querySearch: "",
    };
  },
  setup() {
    const movieStore = useMovieStore();

    const fetchMovies = (page) => {
      movieStore.getAllMoviesByGenre(movieStore.selectedGenre, page);
      console.log("page");
      console.log(page);
    };
    onMounted(() => {
      movieStore.getPopular();
      movieStore.getTopRated();
      movieStore.getTrending();
      movieStore.getAllMovies();
      movieStore.getAllGenres();
      movieStore.getAllMoviesByGenre(28);
    });
    return {
      movieStore,
      fetchMovies,
    };
  },
};
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
