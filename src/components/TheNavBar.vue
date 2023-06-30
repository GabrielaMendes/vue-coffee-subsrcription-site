<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import IconLogo from "./icons/IconLogo.vue";
import IconHamburger from "./icons/IconHamburger.vue";
import IconClose from "./icons/IconClose.vue";

const modalNav = ref(false);
const toggleNav = () => {
  modalNav.value = !modalNav.value;
  
  if (modalNav.value) {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll = function() {window.scrollTo(x, y);};
  } else {
    window.onscroll = function() {};
  }
};
</script>

<template>
  <header class="py-14 flex items-center justify-between relative">
    <RouterLink to="/">
      <IconLogo aria-hidden="true" class="change-menu:transform change-menu:scale-110" />
      <span class="hidden">Coffeeroasters</span>
    </RouterLink>

    <!-- Tablet and Desktop Menu -->
    <nav class="hidden change-menu:flex gap-12">
      <RouterLink :to="{ name: 'home' }">
        <span class="menu-item">home</span>
      </RouterLink>
      <RouterLink :to="{ name: 'about' }">
        <span class="menu-item">about us</span>
      </RouterLink>
      <RouterLink :to="{ name: 'create' }">
        <span class="menu-item">create your plan</span>
      </RouterLink>
    </nav>

    <!-- Burger Menu -->
    <div class="change-menu:hidden">
      <div v-if="!modalNav">
        <IconHamburger role="button" @click="toggleNav" class="transform scale-150" />
        <span class="hidden">Navigation menu</span>
      </div>

      <div v-else>
        <IconClose role="button" @click="toggleNav" class="transform scale-150" />
        <span class="hidden">Close menu</span>
      </div>

      <transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-150 ease-in"
        leave-active-class="transition-opacity duration-150 ease-in"
      >
        <div v-if="modalNav" class="absolute w-screen top-full -left-9">
          <nav class="bg-light-beige flex flex-col items-center justify-center gap-10 py-10">
            <RouterLink @click="toggleNav" :to="{ name: 'home' }">
              <span class="mobile-menu-item">home</span>
            </RouterLink>
            <RouterLink @click="toggleNav" :to="{ name: 'about' }">
              <span class="mobile-menu-item">about us</span>
            </RouterLink>
            <RouterLink @click="toggleNav" :to="{ name: 'create' }">
              <span class="mobile-menu-item">create your plan</span>
            </RouterLink>
          </nav>
          <div class="h-[calc(100svh_-_395px)] menu-gradient"></div>
        </div>
      </transition>
    </div>
  </header>
</template>
