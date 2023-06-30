<script setup>
import { computed } from "vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import TransitionExpand from "@/components/TransitionExpand.vue";

const props = defineProps({
  modelValue: String,
  step: Object,
});

const emit = defineEmits(["update:modelValue", "toggleCards"]);

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <fieldset
    :id="`field-${step.number}`"
    class="mb-16 sm:mb-20"
  >
    <!-- Header -->
    <div
      @click="emit('toggleCards', step.number)"
      class="flex items-center gap-2 justify-between mb-10 lg:mb-14"
      :class="
        step.number === '04' && grindDisabled
          ? ' opacity-50 pointer-events-none'
          : ' cursor-pointer'
      "
    >
      <legend class="text-grey-text text-2xl sm:text-[32px] lg:text-[40px]">
        {{ step.question }}
      </legend>
      <IconArrow :id="`arrow-${step.number}`" class="arrow-down shrink-0" />
    </div>

    <!-- Cards -->
    <TransitionExpand>
      <div
        v-show="step.expanded.value"
        :id="`cards-${step.number}`"
        class="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6"
      >
        <div v-for="option in step.options" :key="option.title" class="sm:min-h-[250px]">
          <input
            type="radio"
            :id="`${step.number}-${option.title}`"
            :name="step.name"
            :value="option.title"
            v-model="selected"
            class="peer appearance-none hidden"
          />
          <label
            :for="`${step.number}-${option.title}`"
            @click="currentStep = step.number"
            class="block h-full p-7 lg:max-xl:p-6 bg-greyish-cream rounded-md cursor-pointer hover:bg-light-salmon peer-checked:bg-primary-green peer-checked:text-light-beige transition-colors duration-300 ease-linear"
          >
            <h3 class="text-2xl mb-3 sm:bm-8 break-words">{{ option.title }}</h3>
            <p>{{ option.description }}</p>
          </label>
        </div>
      </div>
    </TransitionExpand>
  </fieldset>
</template>
