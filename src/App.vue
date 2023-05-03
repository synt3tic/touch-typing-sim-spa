<script setup lang="ts">
import ToHeader from './components/ToHeader.vue';
import TrainScreen from './components/TrainScreen.vue';
import BeforeStart from './components/BeforeStart.vue';
import ResultScreen from './components/ResultScreen.vue';

</script>

<template>
  <to-header></to-header>
  <before-start />
  <result-screen />
  <main class="main">
    <h1></h1>
    <train-screen></train-screen>
  </main>
</template>

<style scoped>
.main {
  @apply flex justify-center p-16;
}
</style>
