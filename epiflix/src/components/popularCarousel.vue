<template>
  <div class="flex flex-col bg-black ml-0 p-auto">
    <h1
      class="flex py-5 lg:px-0 md:px-10 px-0 lg:mx-0 md:mx-20 mx-0 font-bold text-4xl text-white"
    >
      Films mieux notés
    </h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div
        class="flex flex-nowrap lg:ml-0 md:ml-20 ml-0"
        v-for="(movie, i) in movieStore.moviesTopRated"
        :key="i"
      >
        <div class="inline-block px-3">
          <div
            class="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <a v-if="movie.backdrop_path" href="#">
              <img
                class="rounded-t-lg object-fill"
                :src="`${this.imagePath}${movie.backdrop_path}`"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Films mieux notés -->
  <div class="flex flex-col bg-black ml-0 p-auto">
    <h1
      class="flex py-5 lg:px-0 md:px-10 px-0 lg:mx-0 md:mx-20 mx-0 font-bold text-4xl text-white"
    >
      Films Tendances
    </h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div
        class="flex flex-nowrap lg:ml-0 md:ml-20 ml-0"
        v-for="(movie, i) in movieStore.moviesRecents"
        :key="i"
      >
        <div class="inline-block px-3">
          <div
            class="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <a v-if="movie.backdrop_path" href="#">
              <img
                class="rounded-t-lg object-fill"
                :src="`${this.imagePath}${movie.backdrop_path}`"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Populaires -->
  <div class="flex flex-col bg-black ml-0 p-auto">
    <h1
      class="flex py-5 lg:px-0 md:px-10 px-0 lg:mx-0 md:mx-20 mx-0 font-bold text-4xl text-white"
    >
      Films Populaires
    </h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div
        class="flex flex-nowrap lg:ml-0 md:ml-20 ml-0"
        v-for="(movie, i) in movieStore.moviesPopular"
        :key="i"
      >
        <div class="inline-block px-3">
          <div
            class="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <a v-if="movie.backdrop_path" href="#">
              <img
                class="rounded-t-lg object-fill"
                :src="`${this.imagePath}${movie.backdrop_path}`"
                alt=""
              />
            </a>
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
