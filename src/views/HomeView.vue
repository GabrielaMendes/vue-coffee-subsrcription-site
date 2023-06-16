<script setup>
import { RouterLink } from "vue-router";

const coffees = [
  {
    name: "Gran Espresso",
    image: "src/assets/images/home/desktop/image-gran-espresso.png",
    description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    name: "Planalto",
    image: "src/assets/images/home/desktop/image-planalto.png",
    description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    name: "Piccollo",
    image: "src/assets/images/home/desktop/image-piccollo.png",
    description: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    name: "Danche",
    image: "src/assets/images/home/desktop/image-danche.png",
    description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
]
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="w-full hero-bg rounded-lg extra-padding">
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
    </section>

    <!-- Coffee Collection -->
    <section class="w-full relative">
      <div class="w-full sm:absolute sm:top-6 lg:top-4">
        <h1 class="extra-padding w-full mb-10 text-grey-text sm:max-lg:p-0 text-center text-3xl xs:text-[min(10vw,_150px)] relative sm:opacity-50 after:collection-overlay">
          our collection
        </h1>
      </div>
      
      <div class="lg:flex gap-[30px] justify-between items-start extra-padding relative z-10 sm:pt-14">
        <div v-for="coffee in coffees" :key="coffee.name" class="max-lg:mb-14 max-lg:last:mb-0 flex flex-1 flex-col items-center justify-center gap-6 sm:gap-10 lg:gap-[71px] sm:max-lg:flex-row">
          
          <img :src="coffee.image" alt="coffee illustration" class="w-[200px] sm:w-[255px]">
          
          <div class="text-center sm:max-lg:text-left">
            <h2 class="text-2xl mb-4 sm:mb-6">{{ coffee.name }}</h2>
            <p>{{ coffee.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
