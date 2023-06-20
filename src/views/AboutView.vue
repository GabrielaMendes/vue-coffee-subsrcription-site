<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { computed } from "vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smAndLarger = breakpoints.greaterOrEqual("sm");
const lgAndLarger = breakpoints.greaterOrEqual("lg");

const commitmentImg = computed(() => {
  return `src/assets/images/about/${
    lgAndLarger.value ? "desktop" : (smAndLarger.value ? "tablet" : "mobile")
  }/image-commitment.jpg`;
});
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
      <div class="flex flex-col justify-center items-center sm:items-start gap-10">
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
  </main>
</template>
