<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import IconLogo from "./icons/IconLogo.vue"
import IconHamburger from "./icons/IconHamburger.vue"
import IconClose from "./icons/IconClose.vue"

const modalNav = ref(false)
</script>

<template>
  <header class="py-14 flex items-center justify-between relative">
    <IconLogo class="change-menu:transform change-menu:scale-110" />

    <!-- Tablet and Desktop Menu -->
    <nav class="hidden change-menu:flex gap-12">
      <RouterLink to="/">
        <span
          class="uppercase decoration-none font-bold font-barlow text-sm text-grey-text hover:text-dark-bluish-gray-text"
          >home</span
        >
      </RouterLink>
      <RouterLink to="/">
        <span
          class="uppercase decoration-none font-bold font-barlow text-sm text-grey-text hover:text-dark-bluish-gray-text"
          >about</span
        >
      </RouterLink>
      <RouterLink to="/">
        <span
          class="uppercase decoration-none font-bold font-barlow text-sm text-grey-text hover:text-dark-bluish-gray-text"
          >create your plan</span
        >
      </RouterLink>
    </nav>

    <!-- Burger Menu -->
    <div class="change-menu:hidden">
      <IconHamburger v-if="!modalNav" class="transform scale-150" />
      <IconClose v-else class="transform scale-150" />
      
      <div class="absolute w-full top-full left-0">
        <nav
          v-if="modalNav"
          class="flex flex-col items-center justify-center gap-10 menu-gradient py-10"
        >
          <RouterLink to="/">
            <span
              class="capitalize decoration-none font-bold font-fraunces text-2xl text-dark-bluish-gray-text"
              >home</span
            >
          </RouterLink>
          <RouterLink to="/">
            <span
              class="capitalize decoration-none font-bold font-fraunces text-2xl text-dark-bluish-gray-text"
              >about us</span
            >
          </RouterLink>
          <RouterLink to="/">
            <span
              class="capitalize decoration-none font-bold font-fraunces text-2xl text-dark-bluish-gray-text"
              >create your plan</span
            >
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
