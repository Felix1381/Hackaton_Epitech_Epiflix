<template>
  <div class="text-white bg-black">
    <!-- Navbar and Hero -->
    <header
      class="border-b-8 border-grey bg-black/50 bg-blend-color bg-cover bg-[url('../assets/img/movie-bg.jpg')] h-[100vh] overflow-y-scroll"
    >
      <!-- Navbar -->
      <nav
        class="flex flex-wrap items-center justify-around px-1 py-1 nav-bg gap-y-1 sm:justify-between sm:px-8"
      >
        <div>
          <img
            src="../assets/img/logo.svg"
            class="w-auto lg:w-11/12"
            alt="Netflix's Logo"
            loading="lazy"
          />
        </div>
        <!-- Buttons -->
        <div class="flex gap-x-4">
          <button
            @click="this.$router.push('/movies')"
            type="button"
            class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Voir Films
          </button>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="py-8 text-center sm:py-24 px-7 sm:px-10 lg:px-40">
        <h1 class="py-2 text-3xl font-bold sm:text-5xl">
          Films, émissions de télévision et plus encore en illimité
        </h1>
        <h2 class="py-1 mt-10 text-xl font-semibold sm:text-2xl">
          La magie du cinéma, à portée de clic
        </h2>
        <h2 class="py-1 mt-5 text-xl font-semibold sm:text-2xl">
          Epiflix : Votre passeport pour un univers illimité de divertissement
        </h2>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>
