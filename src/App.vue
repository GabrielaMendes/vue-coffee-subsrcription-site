<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="w-full max-w-[1400px] px-10 mx-auto">
    <TheNavBar />
    <RouterView v-slot="{ Component }">
      <Transition
        mode="out-in"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-300 ease-in"
        leave-active-class="transition-opacity duration-300 ease-in"
      >
        <component :is="Component"></component>
      </Transition>
    </RouterView>
    <TheFooter />
  </div>
</template>
