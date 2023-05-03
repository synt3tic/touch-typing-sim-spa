<script setup lang="ts">
import ToHeader from './components/ToHeader.vue';

</script>

<template>
  <to-header></to-header>
  <main class="main">
    <router-view />
  </main>
</template>

<style scoped>
.main {
  @apply flex justify-center p-16;
}
</style>
