<script setup>
import { computed, ref } from "vue";
import useAppTitle from "@/composables/useAppTitle";
import IconArrow from "@/components/icons/IconArrow.vue";

useAppTitle("Create Your Plan");

const preference = ref("_____");
const beanType = ref("_____");
const quantity = ref("_____");
const grindOption = ref("_____");
const delivery = ref("_____");

const currentStep = ref("01");
const grindDisabled = computed(() => {
  return preference.value === "Capsule";
});

const orderSummary = computed(() => {
  return `“I drink my coffee as <span class='text-primary-green'>${
    preference.value
  }</span>, with a <span class='text-primary-green'>${
    beanType.value
  }</span> type of bean. <span class='text-primary-green'>${quantity.value}</span>${
    preference.value === "Capsule"
      ? ""
      : ` ground ala <span class='text-primary-green'>${grindOption.value}</span>`
  }, sent to me <span class='text-primary-green'>${delivery.value}</span>.”`;
});

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

const formSteps = [
  {
    number: "01",
    name: "Preferences",
    question: "How do you drink your coffee?",
    model: preference,
    options: [
      {
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "Filter",
        description: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "Espresso",
        description: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    number: "02",
    name: "Bean type",
    question: "What type of coffee?",
    model: beanType,
    options: [
      {
        title: "Single origin",
        description: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "Decaf",
        description: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "Blended",
        description: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    number: "03",
    name: "Quantity",
    question: "How much would you like?",
    model: quantity,
    options: [
      {
        title: "250g",
        description: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        description: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        description: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    number: "04",
    name: "Grind option",
    question: "Want us to grind them?",
    model: grindOption,
    options: [
      {
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "Filter",
        description: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "Cafetiére",
        description: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    number: "05",
    name: "Deliveries",
    question: "How often should we deliver?",
    model: delivery,
    options: [
      {
        title: "Every week",
        description: "$14.00 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 weeks",
        description: "$17.25 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every month",
        description: "$22.50 per shipment. Includes free priority shipping.",
      },
    ],
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
          Build a subscription plan that best fits your needs. We offer an assortment of the
          bdel="picked"est artisan coffees from around the globe delivered fresh to your door.
        </p>
      </div>
    </section>

    <!-- Steps -->
    <section
      class="w-[calc(100%_+_72px)] sm:w-full max-sm:-ml-9 rounded-lg bg-dark-grey-bg text-light-beige text-center sm:text-left extra-padding"
    >
      <div class="py-20 w-full max-w-[1045px]">
        <div class="max-sm:mb-20 sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-20">
          <span
            class="max-sm:hidden border-b-[3px] border-light-salmon ml-3.5 col-span-2 sm:w-[calc(100%_+_23px)] lg:w-[calc(100%_+_83px)]"
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

    <!-- Form  -->
    <section class="w-full">
      <div class="sm:extra-padding flex items-start justify-between gap-8">
        <!-- Form menu -->
        <div class="hidden lg:block w-[255px] min-w-[228px]">
          <div
            v-for="step in formSteps"
            :key="step.number"
            class="cursor-pointer border-t"
            :class="{
              'border-none': step.number === '01',
              'cursor-default': step.number === '04' && grindDisabled,
            }"
          >
            <h2
              class="text-2xl mb-4 pt-4 opacity-40 hover:opacity-60 transition-opacity duration-200 ease-linear"
              :class="{
                'opacity-95': currentStep === step.number,
                'opacity-20 hover:opacity-20': step.number === '04' && grindDisabled,
              }"
            >
              <span
                class="text-grey-text mr-6"
                :class="{ 'text-primary-green': step.number === '01' }"
                >{{ step.number }}</span
              >
              {{ step.name }}
            </h2>
          </div>
        </div>

        <form @submit.prevent="" class="max-w-[740px]">
          <fieldset v-for="step in formSteps" :key="step.number">
            <div class="flex items-center justify-between mb-10">
              <legend class="text-grey-text text-2xl sm:text-[32px] lg:text-[40px]">
                {{ step.question }}
              </legend>
              <IconArrow />
            </div>

            <div
              class="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 mb-28"
            >
              <div v-for="option in step.options" :key="option.title" class="sm:min-h-[250px]">
                <input
                  type="radio"
                  :id="`${step.number}-${option.title}`"
                  :name="step.name"
                  :value="option.title"
                  v-model="step.model"
                  class="peer appearance-none"
                />
                <label
                  :for="`${step.number}-${option.title}`"
                  class="block h-full p-7 lg:max-xl:p-6 bg-greyish-cream rounded-md cursor-pointer hover:bg-light-salmon peer-checked:bg-primary-green peer-checked:text-light-beige transition-colors duration-300 ease-linear"
                >
                  <h3 class="text-2xl mb-3 sm:mb-8 break-words">{{ option.title }}</h3>
                  <p>{{ option.description }}</p>
                </label>
              </div>
            </div>
          </fieldset>

          <div class="rounded-md mb-10 bg-dark-grey-bg py-8 px-6 md:px-14">
            <div class="uppercase text-grey-text mb-4">Order Summary</div>
            <h6 class="text-2xl text-light-beige" v-html="orderSummary"></h6>
          </div>

          <button
            type="submit"
            class="app-button mx-auto lg:mr-0 lg:ml-auto text-lg font-fraunces font-black"
          >
            Create my plan!
          </button>
        </form>
      </div>
    </section>
  </main>
</template>
