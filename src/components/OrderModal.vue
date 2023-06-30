<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

defineProps({
  summary: String,
});

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')

const emit = defineEmits(["closeModal"])

const modal = ref(null)

onClickOutside(modal, () => emit("closeModal"))
</script>

<template>
  <!-- Overlay -->
  <div class="absolute top-0 left-0 bg-black/40 w-screen h-full flex items-center justify-center px-8">
    <!-- Modal -->
    <div ref="modal" class="rounded-md max-w-[540px] overflow-x-hidden bg-light-beige">
      <header class="bg-dark-grey-bg text-light-beige p-11">
        <h1 class="text-[28px] sm:text-[40px]">Order Summary</h1>
      </header>
      <div class="p-11 mt-4 text-grey-text">
        <div>
          <h2 v-html="summary" class="text-2xl  leading-relaxed"></h2>
          <p class="leading-relaxed mt-4">
            Is this correct? You can proceed to checkout or go back to plan selection if something is
            off. Subscription discount codes can also be redeemed at the checkout.
          </p>
        </div>

        <div class="mt-12 flex items-center justify-between gap-2">
          <h3 class="max-sm:hidden text-[32px] text-dark-bluish-gray-text">$14.00/mo</h3>
          <button class="app-button w-full">{{ isMobile ? 'Checkout - $14.00/mo' : 'Checkout' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
