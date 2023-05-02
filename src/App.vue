<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getText } from './API/textAPI';
import ToHeader from './components/ToHeader.vue';
import TrainScreen from './components/TrainScreen.vue';
import { useSessionStore } from './stores/SessionStore';
import ToModal from './components/UI/ToModal.vue';
import ToButton from './components/UI/ToButton.vue';

const store = useSessionStore();
const requestError = ref<Error | null>(null);

onMounted(async () => {
  try {
    const text = await getText();    
    store.convertTextToArray(text.text);
    store.isLoading = false;
  } catch (error) {
    requestError.value = error as Error;
  }
});
</script>

<template>
  <to-modal v-if="!store.isTryActive">
    <template #header>Приготовьтесь к печати</template>
    <to-button @click="store.startTry">Начать печатать</to-button>
  </to-modal>
  <to-header></to-header>
  <main class="main">
    <h1></h1>
    <train-screen></train-screen>
    <div>{{ store.secondsCounter }}</div>
  </main>
</template>

<style scoped>
.main {
  @apply flex justify-center p-16;
}
</style>
