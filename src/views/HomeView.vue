<script setup>
import { RouterLink } from "vue-router";
import useAppTitle from "@/composables/useAppTitle"
import IconCoffeeBean from "@/components/icons/IconCoffeeBean.vue";
import IconGift from "@/components/icons/IconGift.vue";
import IconTruck from "@/components/icons/IconTruck.vue";

useAppTitle("Home");

const coffees = [
  {
    name: "Gran Espresso",
    image: "/images/home/desktop/image-gran-espresso.png",
    description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    name: "Planalto",
    image: "/images/home/desktop/image-planalto.png",
    description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    name: "Piccollo",
    image: "/images/home/desktop/image-piccollo.png",
    description: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    name: "Danche",
    image: "/images/home/desktop/image-danche.png",
    description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

const benefits = [
  {
    name: "Best quality",
    image: IconCoffeeBean,
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    name: "Exclusive benefits",
    image: IconGift,
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    name: "Free shipping ",
    image: IconTruck,
    description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const steps = [
  {
    number: "01",
    name: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    name: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    name: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning  world-class coffees curated to provide a distinct tasting experience.",
  },
];
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="w-full hero-home-bg rounded-lg extra-padding">
      <div
        class="text-light-beige w-full text-center sm:text-left sm:w-[398px] lg:w-[493px] h-full flex flex-col justify-center items-center sm:items-start gap-10"
      >
        <h1 class="text-[40px] sm:text-5xl lg:text-7xl">Great coffee made simple.</h1>
        <p>
          Start your mornings with the world's best coffees. Try our expertly curated artisan
          coffees from our best roasters delivered directly to your door, at your schedule.
        </p>
        <RouterLink role="button" class="app-button sm:mr-auto" :to="{ name: 'create' }">
          Create your plan
        </RouterLink>
      </div>
    </section>

    <!-- Coffee Collection -->
    <section class="w-full relative">
      <div class="w-full sm:absolute sm:top-6 lg:top-4">
        <h2
          class="extra-padding w-full mb-10 text-grey-text sm:max-lg:p-0 text-center text-3xl xs:text-[min(10vw,_150px)] relative sm:opacity-50 after:collection-overlay"
        >
          our collection
        </h2>
      </div>

      <div
        class="lg:flex gap-[30px] justify-between items-start extra-padding relative z-10 sm:pt-14"
      >
        <div
          v-for="coffee in coffees"
          :key="coffee.name"
          class="max-lg:mb-14 max-lg:last:mb-0 flex flex-1 flex-col items-center justify-center gap-6 sm:gap-10 lg:gap-[71px] sm:max-lg:flex-row"
        >
          <img :src="coffee.image" alt="coffee illustration" class="w-[200px] sm:w-[255px]" />

          <div class="text-center sm:max-lg:text-left">
            <h3 class="text-2xl mb-4 sm:mb-6">{{ coffee.name }}</h3>
            <p>{{ coffee.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="w-full text-light-beige text-center">
      <div
        class="bg-dark-grey-bg extra-padding rounded-lg w-full h-[902px] sm:h-[573px] overflow-visible"
      >
        <div class="py-16 lg:py-20 lg:w-1/2 mx-auto">
          <h2 class="mb-6 text-[28px] sm:text-[32px] lg:text-[40px]">Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will be featured in our
            range. This means working closely with the best coffee growers to give you a more
            impactful experience on every level.
          </p>
        </div>
      </div>

      <div
        class="extra-padding grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-6 -mt-[620px] sm:-mt-[320px] lg:-mt-[250px]"
      >
        <div
          v-for="benefit in benefits"
          :key="benefit.name"
          class="bg-primary-green rounded-md text-center text-light-beige p-12 last:pt-[70px] last:sm:max-lg:pt-12 flex flex-col sm:max-lg:flex-row items-center gap-14 sm:max-lg:gap-12"
        >
          <component :is="benefit.image" class="shrink-0"></component>

          <div class="sm:max-lg:text-left">
            <h3 class="mb-6 text-2xl">{{ benefit.name }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="w-full max-w-[1045px] text-center sm:text-left lg:extra-padding">
      <h2 class="text-2xl text-grey-text mb-20 sm:mb-14">How it works</h2>

      <div class="max-sm:mb-20 sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-20 relative">
        <span
          class="max-sm:hidden border-b-[3px] border-light-salmon w-[65vw] lg:w-[58vw] max-w-[658px] absolute top-3.5"
        ></span>

        <div v-for="step in steps" :key="step.number" class="mb-14 flex-1">
          <div
            class="max-sm:hidden mb-14 w-[31px] h-[31px] rounded-full bg-light-beige border-2 border-primary-green relative z-10"
          ></div>
          <div class="text-7xl text-light-salmon font-fraunces font-black mb-6">
            {{ step.number }}
          </div>
          <h3 class="text-[28px] lg:text-[32px] mb-6">{{ step.name }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
      <RouterLink role="button" class="app-button max-sm:mx-auto w-fit" :to="{ name: 'create' }">
        Create your plan
      </RouterLink>
    </section>
  </main>
</template>
