<script setup>
import { RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="w-full max-w-[1400px] px-10 mx-auto">
    <TheNavBar />
    <RouterView />
    <TheFooter />
  </div>
</template>