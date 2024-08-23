import { defineStore } from "pinia";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk0ODdjOTk2NDlhNzE0NDBjMTFlOWRjOWM1ZDg4MyIsIm5iZiI6MTcyNDQwNTYzMC40Njg5NzcsInN1YiI6IjY2YzMwOWRlMTRhNjJlNGJkZGFkOWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kuM_tSX1kUZefNUrfhezPCuDb56bdihPz8r_uYjLUgo";
export const movieStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    getTopRated() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      var raw = "";

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://api.themoviedb.org/3/movie/popular?page=1", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },
});
