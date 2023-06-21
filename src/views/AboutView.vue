<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { computed } from "vue";
import IconAustralia from "@/components/icons/countries/IconAustralia.vue";
import IconCanada from "@/components/icons/countries/IconCanada.vue";
import IconUK from "@/components/icons/countries/IconUK.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smAndLarger = breakpoints.greaterOrEqual("sm");
const lgAndLarger = breakpoints.greaterOrEqual("lg");

const commitmentImg = computed(() => {
  return `src/assets/images/about/${
    lgAndLarger.value ? "desktop" : (smAndLarger.value ? "tablet" : "mobile")
  }/image-commitment.jpg`;
});

const qualityImg = computed(() => {
  return `src/assets/images/about/${
    lgAndLarger.value ? "desktop" : (smAndLarger.value ? "tablet" : "mobile")
  }/image-quality.jpg`;
});

const headquarters = [
  {
    icon: IconUK,
    country: "United Kingdom",
    address: "68 Asfordby Rd",
    city: "Alcaston",
    region: "SY6 1YA",
    phone: "+44 1241 918425",
  },
  {
    icon: IconCanada,
    country: "Canada",
    address: "1528 Eglinton Avenue",
    city: "Toronto",
    region: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
  },
  {
    icon: IconAustralia,
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    region: "Victoria",
    phone: "+61 4 9928 3629",
  },
]
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="w-full hero-about-bg rounded-lg extra-padding">
      <div
        class="text-light-beige w-full text-center sm:text-left sm:w-[398px] lg:w-[493px] h-full flex flex-col justify-center items-center sm:items-start gap-10"
      >
        <h2 class="text-[28px] sm:text-[32px] lg:text-[40px]">About us</h2>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of
          coffee from around the world. We have since been dedicated to bring the perfect cup - from
          bean to brew - in every shipment.
        </p>
      </div>
    </section>

    <!-- Our Commitment -->
    <section class="w-full lg:extra-padding flex flex-col sm:flex-row items-center gap-16 lg:gap-28">
      <img :src="commitmentImg" alt="a barista pouring milk on a cup of coffee" class="rounded-md" />
      <div class="text-center sm:text-left flex flex-col justify-center items-center sm:items-start gap-10">
        <h2 class="text-[32px] lg:text-[40px]">Our commitment</h2>
        <p>
          We're built on a simple mission and a commitment to doing good along the way. We want to
          make it easy for you to discover and brew the world's best coffee at home. It all starts
          at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a
          year trying to understand the challenges and opportunities in each of these places. We
          collaborate with exceptional coffee growers and empower a global community of farmers
          through with well above fair-trade benchmarks. We also offer training, support farm
          community initiatives, and invest in coffee plant science. Curating only the finest
          blends, we roast each lot to highlight tasting profiles distinctive to their native
          growing region.
        </p>
      </div>
    </section>

    <!-- Quality -->
    <section class="w-full mt-[calc(120px_+_min(120px,18vw))] sm:mt-[calc(140px_+_min(150px,18vw))] lg:mt-[250px] bg-dark-grey-bg rounded-lg extra-padding pb-20 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-28">
      <img :src="qualityImg" alt="a barista pouring milk on a cup of coffee" class="rounded-md -mt-[min(120px,_18vw)] sm:-mt-[min(150px,_18vw)] lg:-mt-20" />
      <div class="lg:pt-10 text-center lg:text-left text-light-beige flex flex-col justify-center items-center lg:items-start gap-10">
        <h2 class="text-[28px] sm:text-[32px] lg:text-[40px]">Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
        </p>
      </div>
    </section>

    <!-- Headquarters -->
    <section class="w-full extra-padding sm:max-lg:px-0">
      <h2 class="mb-[70px] text-grey-text text-2xl text-center sm:text-left">Our heardquarters</h2>
      <div class="grid gap-20 sm:gap-10 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1">
        <div v-for="head in headquarters" :key="head.country" class="text-center sm:text-left flex flex-col items-center sm:items-start">
          <component :is="head.icon" class="mb-12"></component>
          <h3 class="text-[28px] sm:text-2xl lg:text-[32px] mb-6 sm:max-lg:mb-5">{{ head.country }}</h3>
          <p>{{ head.address }}</p>
          <p>{{ head.city }}</p>
          <p>{{ head.region }}</p>
          <p>{{ head.phone }}</p>
        </div>
      </div>

    </section>
  </main>
</template>
