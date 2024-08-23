<template>
  <div class="px-10 py-5 bg-black movies">
    <button @click="this.$router.push('/')">
      <img src="../assets/Logo.webp" alt="" srcset="" />
    </button>
    <div class="mt-10">
      <form class="max-w-md mx-auto" @submit.prevent>
        <div class="flex">
          <label
            for="location-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Rechercher un film</label
          >

          <div
            id="dropdown-search-city"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white"
          ></div>
          <div class="relative w-full">
            <input
              type="search"
              id="location-search"
              class="block p-2.5 w-full z-20 text-sm bg-gray-50 dark:placeholder-gray-400 text-black"
              placeholder="Rechercher un film de votre choix"
              v-model="querySearch"
              @input="movieStore.searchMovieByName(this.querySearch)"
              required
            />
            <button
              type="submit"
              @click="movieStore.searchMovieByName(this.querySearch)"
              class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white hover:bg-red-800 bg-red-600"
            >
              <div class="flex items-center justify-center">
                <span>Rechercher</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.2002 18L13.2002 12L7.2002 5.99998L8.4002 3.59998L16.8002 12L8.4002 20.4L7.2002 18Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="flex items-center content-center justify-center pt-16 pb-5">
      <h1 class="w-1/2 text-5xl text-center text-white leading-[1.2]">
        Retrouver ici la liste de tous les genres de films disponibles
      </h1>
    </div>
    <div class="flex flex-wrap items-center justify-center">
      <button
        v-for="(genre, i) in movieStore.genres"
        :key="i"
        @click="movieStore.getAllMoviesByGenre(genre.id)"
        type="button"
        class="py-3.5 mb-2 text-sm font-medium text-white border-collapse border border-[red] bg-transparent rounded-lg px-16 me-2 my-2"
        :class="{
          'py-3.5 mb-2 text-sm font-medium border-collapse text-white border border-[red] rounded-lg px-16 me-2 my-2': true,
          'bg-red-700 text-white': movieStore.selectedGenre === genre.id, // Style pour le genre sélectionné
          'bg-transparent': movieStore.selectedGenre !== genre.id, // Style pour les autres genres
        }"
      >
        {{ genre.name }}
      </button>
    </div>
    <div class="flex flex-wrap justify-center gap-8 py-11">
      <div
        v-for="(movie, i) in movieStore.moviesByGenre"
        :key="i"
        class="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow"
      >
        <a v-if="movie.backdrop_path" href="#">
          <img
            class="rounded-t-lg"
            :src="`${this.imagePath}${movie.backdrop_path}`"
            alt=""
          />
        </a>
        <div v-if="movie.backdrop_path" class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1"
            >
              {{ movie.title }}
            </h5>
          </a>
          <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2"
          >
            {{ movie.overview }}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:bg-red-600"
          >
            Lire plus
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="flex items-end justify-end gap-6 pb-10 pr-28">
      <button
        @click="fetchMovies(movieStore.currentPage - 1)"
        :disabled="movieStore.currentPage === 1"
        class="text-white"
      >
        Précédent
      </button>
      <p class="font-bold text-white">
        {{ movieStore.currentPage }} sur {{ movieStore.totalPages }}
      </p>

      <button
        class="text-white"
        @click="fetchMovies(movieStore.currentPage + 1)"
        :disabled="movieStore.currentPage === movieStore.totalPages"
      >
        Suivant
      </button>
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
<style></style>
