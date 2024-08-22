import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [],
    moviesByGenre: [],

    genres: [],
    apiUrl: "https://api.themoviedb.org/3",
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDk2ODJkNTlhMWI0ZTczNjgwZDlmOTk2NzhiMmFhMCIsIm5iZiI6MTcyNDMzNDEzNC41ODg4MzQsInN1YiI6IjY2MzhjNTZjMWI3Mjk0MDEyNDM3OTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEhGwRzBktsc8iV3zhbM4LDNj4cRPXmBnQVvm4Kscw",
    currentPage: 1,
    totalPages: 1,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    getAllMovies() {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(`${this.apiUrl}/discover/movie?language=fr-FR`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          (this.movies = data.results),
            (console.log("Fetch all movies"), console.log(this.movies));
        });
      // .catch((error) => console.log(error));
      // .catch((error) => (this.message = error.message));
    },
    getAllGenres() {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(`${this.apiUrl}/genre/movie/list`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          (this.genres = data.genres),
            (console.log("Fetch all genres"), console.log(this.data));
        });
      // .catch((error) => console.log(error));
      // .catch((error) => (this.message = error.message));
    },

    //
    getAllMoviesByGenre(genreId, page = 1) {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(
        `${this.apiUrl}/discover/movie?language=fr-FR&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          (this.moviesByGenre = data.results),
            (this.currentPage = data.page),
            (console.log("Fetch all movies by genre"),
            console.log(this.moviesByGenre));
        })
        .catch((error) => console.log(error))
        .catch((error) => (this.message = error.message));
    },
  },
});
