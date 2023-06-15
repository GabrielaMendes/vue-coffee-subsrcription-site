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
          class="menu-item"
          >home</span
        >
      </RouterLink>
      <RouterLink to="/">
        <span
          class="menu-item"
          >about</span
        >
      </RouterLink>
      <RouterLink to="/">
        <span
          class="menu-item"
          >create your plan</span
        >
      </RouterLink>
    </nav>

    <!-- Burger Menu -->
    <div class="change-menu:hidden">
      <IconHamburger v-if="!modalNav" class="transform scale-150" />
      <IconClose v-else class="transform scale-150" />
      
      <div v-if="modalNav" class="absolute w-full top-full left-0">
        <nav
          class="bg-light-beige flex flex-col items-center justify-center gap-10 py-10"
        >
          <RouterLink to="/">
            <span
              class="mobile-menu-item"
              >home</span
            >
          </RouterLink>
          <RouterLink to="/">
            <span
              class="mobile-menu-item"
              >about us</span
            >
          </RouterLink>
          <RouterLink to="/">
            <span
              class="mobile-menu-item"
              >create your plan</span
            >
          </RouterLink>
        </nav>
        <div class=" h-[calc(100svh_-_395px)] menu-gradient"></div>
      </div>
    </div>
  </header>
</template>
