<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="w-full max-w-[1400px] px-10 mx-auto">
    <TheNavBar />
    <transition 
      mode="out-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition-opacity duration-500 ease-in"
      leave-active-class="transition-opacity duration-500 ease-in"
    >
      <RouterView />
    </transition>
    <TheFooter />
  </div>
</template>
