<script setup>
import { RouterLink } from "vue-router";
import IconLogo from "./icons/IconLogo.vue";
import IconFacebook from "./icons/social-media/IconFacebook.vue";
import IconTwitter from "./icons/social-media/IconTwitter.vue";
import IconInstagram from "./icons/social-media/IconInstagram.vue";
</script>

<template>
  <footer
    class="bg-dark-grey-bg py-14 mb-16 w-full extra-padding flex flex-col gap-12 items-center lg:flex-row lg:justify-between"
  >
    <div class="flex flex-col gap-12 sm:gap-8 items-center lg:flex-row lg:gap-24">
      <RouterLink to="/">
        <IconLogo
          :light="true"
          aria-hidden="true"
          class="change-menu:transform change-menu:scale-110"
        />
        <span class="hidden">Coffeeroasters</span>
      </RouterLink>
      <!-- Menu -->
      <nav class="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <RouterLink to="/">
          <span class="menu-item hover:text-light-beige">home</span>
        </RouterLink>
        <RouterLink to="/">
          <span class="menu-item hover:text-light-beige">about us</span>
        </RouterLink>
        <RouterLink to="/">
          <span class="menu-item hover:text-light-beige">create your plan</span>
        </RouterLink>
      </nav>
    </div>

    <div class="flex gap-6 ml-aut">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <IconFacebook aria-hidden="true" />
        <span class="hidden">Facebook</span>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <IconTwitter aria-hidden="true" />
        <span class="hidden">Twitter</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <IconInstagram aria-hidden="true" />
        <span class="hidden">Instagram</span>
      </a>
    </div>
  </footer>
</template>
