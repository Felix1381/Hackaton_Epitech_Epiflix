import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [],
    moviesPopular: [],
    moviesTopRated: [],
    moviesRecents: [],
    moviesEpiflix: [],
    moviesByGenre: [],
    genres: [],
    detailId: [],
    apiUrl: "https://api.themoviedb.org/3",
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDk2ODJkNTlhMWI0ZTczNjgwZDlmOTk2NzhiMmFhMCIsIm5iZiI6MTcyNDMzNDEzNC41ODg4MzQsInN1YiI6IjY2MzhjNTZjMWI3Mjk0MDEyNDM3OTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rTEhGwRzBktsc8iV3zhbM4LDNj4cRPXmBnQVvm4Kscw",
    currentPage: 1,
    totalPages: 1,
    selectedGenre: 28,
    movie: [],
  }),
  getters: {},
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
    getTopRated() {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(`${this.apiUrl}/movie/top_rated?language=fr-FR`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          (this.moviesTopRated = data.results),
            (console.log("Fetch TopRated movies"),
            console.log(this.moviesTopRated));
        });
      // .catch((error) => console.log(error));
      // .catch((error) => (this.message = error.message));
    },
    getPopular() {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(`${this.apiUrl}/movie/popular?language=fr-FR`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          (this.moviesPopular = data.results),
            (console.log("Fetch TopRated movies"),
            console.log(this.moviesPopular));
        });
      // .catch((error) => console.log(error));
      // .catch((error) => (this.message = error.message));
    },
    getTrending() {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(`${this.apiUrl}/trending/all/week?language=fr-FR`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          (this.moviesRecents = data.results),
            (console.log("Fetch TopRated movies"),
            console.log(this.moviesRecents));
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
            console.log("data"),
            // console.log(data),
            (this.currentPage = data.page),
            console.log(this.currentPage),
            (this.totalPages = data.total_pages),
            (this.selectedGenre = genreId),
            (console.log("Fetch count all movies by genre"),
            console.log(this.selectedGenre, console.log(this.currentPage)));
        })
        .catch((error) => console.log(error))
        .catch((error) => (this.message = error.message));
    },
    searchMovieByName(title, page = 1) {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };

      fetch(
        `${this.apiUrl}/search/movie?language=fr-FR&sort_by=popularity.desc&query=${title}&page=${page}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          (this.moviesByGenre = data.results),
            (this.currentPage = data.page),
            (console.log("Get on genres"), console.log(this.moviesByGenre));
        })
        .catch((error) => console.log(error))
        .catch((error) => (this.message = error.message));
    },

    getMoviesDetail(movie_Id) {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
          "content-type": "application/json",
        },
      };
      fetch(
        `${this.apiUrl}/movie/${movie_Id}?language=fr-FR&sort_by=popularity.desc`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          (this.movie = data),
            // console.log(data),
            console.log("Fetch "),
            console.log(this.movie);
        })
        .catch((error) => console.log(error))
        .catch((error) => (this.message = error.message));
    },
  },
});
