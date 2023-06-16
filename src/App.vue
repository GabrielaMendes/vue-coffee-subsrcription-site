<script setup>
import { RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue';
</script>

<template>
  <div class="w-full max-w-[1400px] px-10 mx-auto">
    <TheNavBar />
    <RouterView />
  </div>
</template>