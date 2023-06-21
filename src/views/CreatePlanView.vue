<script setup>
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
    <section class="w-full hero-plan-bg rounded-lg extra-padding">
      <div
        class="text-light-beige w-full text-center sm:text-left sm:w-[398px] lg:w-[493px] h-full flex flex-col justify-center items-center sm:items-start gap-10"
      >
        <h2 class="text-[40px] sm:text-5xl lg:text-7xl">Create a plan</h2>
        <p>
          Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
        </p>
      </div>
    </section>

    <!-- Steps -->
    <section class="w-[calc(100%_+_72px)] sm:w-full max-sm:-ml-9 rounded-lg bg-dark-grey-bg text-light-beige text-center sm:text-left extra-padding">
      <div class="py-20 w-full max-w-[1045px]">
        <div class="max-sm:mb-20 sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-20">
            <span
              class="max-sm:hidden border-b-[3px] border-light-salmon  ml-3.5 col-span-2 sm:w-[calc(100%_+_23px)] lg:w-[calc(100%_+_83px)]"
            ></span>
            <span class="max-sm:hidden col-span-1"></span>
          <div v-for="step in steps" :key="step.number" class="mb-14 flex-1">
            <div
              class="max-sm:hidden mb-14 w-[31px] h-[31px] rounded-full border-2 border-primary-green relative z-10 sm:-mt-[37px] lg:-mt-[97px]"
            ></div>
            <div class="text-7xl text-light-salmon font-fraunces font-black mb-6">
              {{ step.number }}
            </div>
            <h3 class="text-[28px] lg:text-[32px] mb-6">{{ step.name }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>