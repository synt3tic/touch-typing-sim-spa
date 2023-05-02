<script setup lang="ts">
import { getText } from './API/textAPI';
import ToHeader from './components/ToHeader.vue';
import TrainScreen from './components/TrainScreen.vue';
import { useSessionStore } from './stores/SessionStore';

const store = useSessionStore();


try {
  const res = await getText();
  console.log(res);
} catch (error) {
  console.log(error.message as Error);
  
}



</script>

<template>
  <to-header></to-header>
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
