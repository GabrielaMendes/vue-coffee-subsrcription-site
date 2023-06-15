<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <main>
    <!-- Hero -->
    <div class="w-full hero-bg rounded-lg extra-padding">
      <div
        class="text-light-beige w-full text-center sm:text-left sm:w-[398px] lg:w-[493px] h-full flex flex-col justify-center items-center md:items-left gap-10"
      >
        <h1 class="text-[40px] sm:text-5xl lg:text-7xl">
          Great coffee made simple.
        </h1>
        <p>
          Start your mornings with the world's best coffees. Try our expertly curated artisan
          coffees from our best roasters delivered directly to your door, at your schedule.
        </p>
        <RouterLink role="button" class="app-button sm:mr-auto" to="/">
          <span class="text-lg font-fraunces font-black">
            Create your plan
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- Coffees -->
  </main>
</template>
