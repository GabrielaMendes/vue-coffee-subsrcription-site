<script setup>
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { useScrollLock } from "@vueuse/core";
import useAppTitle from "@/composables/useAppTitle";
import FormField from "@/components/FormField.vue";
import useCoffees from "@/composables/useCoffees";

const OrderModal = defineAsyncComponent(() => {
  return import("../components/OrderModal.vue");
});

useAppTitle("Create Your Plan");

const preference = ref("_____");
const beanType = ref("_____");
const quantity = ref("_____");
const grindOption = ref("_____");
const delivery = ref("_____");

const currentStep = ref("");

const modalOpen = ref(false);
const body = document.querySelector("body");
const isLocked = useScrollLock(body);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
  isLocked.value = !isLocked.value;
};

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

const { steps } = useCoffees();

const formSteps = [
  {
    number: "01",
    name: "Preferences",
    question: "How do you drink your coffee?",
    model: preference,
    expanded: ref(false),
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
    expanded: ref(false),
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
    expanded: ref(false),
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
    expanded: ref(false),
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
    expanded: ref(false),
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

const buttonDisabled = computed(() => {
  for (let step of formSteps) {
    if (step.number === "04" && grindDisabled.value) {
      continue;
    }
    if (step.model.value === "_____") {
      return true;
    }
  }
  return false;
});

const toggleField = (field) => {
  const arrow = document.getElementById(`arrow-${field}`);

  if (arrow.classList.contains("open")) {
    arrow.classList.remove("open");
  } else {
    arrow.classList.add("open");
  }

  const step = formSteps.find((step) => step.number === field);
  step.expanded.value = !step.expanded.value;
  currentStep.value = field;
};

watch(grindDisabled, (newValue) => {
  if (newValue && formSteps[3].expanded.value) {
    toggleField("04");
    currentStep.value = "01";
  }
});

const menuNavigate = (field) => {
  document.getElementById(`field-${field}`).scrollIntoView({ behavior: "smooth", block: "start" });

  const step = formSteps.find((step) => step.number === field);
  if (step.expanded.value === true) {
    currentStep.value = field;
    return;
  }
  toggleField(field);
};

const onCardSelected = (field) => {
  currentStep.value = field;

  const nextStepIndex =
  field === "03" && grindDisabled.value
  ? parseInt(field) + 1
  : parseInt(field);
  
  if(!formSteps[nextStepIndex]) {
    return;
  }

  const nextStep = formSteps[nextStepIndex]
  !nextStep.expanded.value && toggleField(nextStep.number)
};

const checkout = () => {
  const order = {
    preference: preference.value,
    beanType: beanType.value,
    quality: quantity.value,
    grindOption: grindDisabled.value ? null : grindOption.value,
    delivery: delivery.value,
  };

  console.log(order);
  toggleModal();
};

onMounted(() => toggleField("01"));
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
          <button
            :disabled="step.number === '04' && grindDisabled"
            v-for="step in formSteps"
            :key="step.number"
            class="w-full rounded-sm text-left border-t cursor-pointer disabled:pointer-events-none"
            @click="menuNavigate(step.number)"
            :class="{
              'border-none': step.number === '01',
            }"
          >
            <h2
              class="text-2xl mb-4 pt-4 hover:opacity-60 transition-opacity duration-200 ease-linear"
              :class="{
                'opacity-20': step.number === '04' && grindDisabled,
                'opacity-40': step.number !== '04' || !grindDisabled,
                'opacity-95': currentStep === step.number,
              }"
            >
              <span
                class="text-grey-text mr-6"
                :class="{ 'text-primary-green': step.number === '01' }"
                >{{ step.number }}</span
              >
              {{ step.name }}
            </h2>
          </button>
        </div>

        <!-- Options selection -->
        <form class="max-w-[740px]">
          <div v-for="step in formSteps" :key="step.number">
            <FormField
              :step="step"
              :grindDisabled="grindDisabled"
              v-model="step.model.value"
              @toggle-cards="toggleField"
              @card-selected="onCardSelected(step.number)"
            />
          </div>

          <div class="rounded-md mb-10 bg-dark-grey-bg py-8 px-6 md:px-14">
            <div class="uppercase text-grey-text mb-4">Order Summary</div>
            <h6 class="text-2xl text-light-beige leading-relaxed" v-html="orderSummary"></h6>
          </div>

          <button
            :disabled="buttonDisabled"
            @click.prevent="toggleModal"
            class="app-button mx-auto lg:mr-0 lg:ml-auto"
          >
            Create my plan!
          </button>
        </form>
      </div>
    </section>

    <!-- Confirmation Modal -->
    <Teleport to="html">
      <transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-150 ease-in"
        leave-active-class="transition-opacity duration-150 ease-in"
      >
        <OrderModal
          v-if="modalOpen"
          :summary="orderSummary"
          @close-modal="toggleModal"
          @confirm-order="checkout"
        />
      </transition>
    </Teleport>
  </main>
</template>
