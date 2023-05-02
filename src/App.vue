<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getText } from './API/textAPI';
import ToHeader from './components/ToHeader.vue';
import TrainScreen from './components/TrainScreen.vue';
import { useSessionStore } from './stores/SessionStore';

const store = useSessionStore();
const requestError = ref<Error | null>(null);


onMounted(async () => {
  try {
    const text = await getText();
    store.text = text;
    store.isLoading = false;
  } catch (error) {
    requestError.value = error as Error;
  }
});
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
