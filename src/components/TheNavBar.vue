<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import IconLogo from "./icons/IconLogo.vue";
import IconHamburger from "./icons/IconHamburger.vue";
import IconClose from "./icons/IconClose.vue";

const modalNav = ref(false);
</script>

<template>
  <header class="py-14 flex items-center justify-between relative">
    <RouterLink to="/">
      <IconLogo aria-hidden="true" class="change-menu:transform change-menu:scale-110" />
      <span class="hidden">Coffeeroasters</span>
    </RouterLink>

    <!-- Tablet and Desktop Menu -->
    <nav class="hidden change-menu:flex gap-12">
      <RouterLink to="/">
        <span class="menu-item">home</span>
      </RouterLink>
      <RouterLink to="/">
        <span class="menu-item">about us</span>
      </RouterLink>
      <RouterLink to="/">
        <span class="menu-item">create your plan</span>
      </RouterLink>
    </nav>

    <!-- Burger Menu -->
    <div class="change-menu:hidden">
      <div v-if="!modalNav">
        <IconHamburger role="button" class="transform scale-150" />
        <span class="hidden">Navigation menu</span>
      </div>

      <div v-else>
        <IconClose role="button" class="transform scale-150" />
        <span class="hidden">Close menu</span>
      </div>

      <div v-if="modalNav" class="absolute w-full top-full left-0">
        <nav class="bg-light-beige flex flex-col items-center justify-center gap-10 py-10">
          <RouterLink to="/">
            <span class="mobile-menu-item">home</span>
          </RouterLink>
          <RouterLink to="/">
            <span class="mobile-menu-item">about us</span>
          </RouterLink>
          <RouterLink to="/">
            <span class="mobile-menu-item">create your plan</span>
          </RouterLink>
        </nav>
        <div class="h-[calc(100svh_-_395px)] menu-gradient"></div>
      </div>
    </div>
  </header>
</template>
