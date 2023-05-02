<script setup lang="ts">
import NavBar from './NavBar.vue';

</script>

<template>
  <header class="to-header">
      <nav-bar />
  </header>
</template>

<style scoped>
.to-header {
  @apply flex justify-center w-full h-10 bg-blue-400;
}
</style>