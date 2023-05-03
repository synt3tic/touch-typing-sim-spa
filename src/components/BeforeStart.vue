<script setup lang="ts">
import { ref } from 'vue';
import { getText } from '../API/textAPI';
import ToModal from '../components/UI/ToModal.vue';
import ToButton from '../components/UI/ToButton.vue';
import { useSessionStore } from '../stores/SessionStore';

const store = useSessionStore();

const requestError = ref<Error | null>(null);

const startTyping = async () => {
  try {
    const text = await getText();    
    store.convertTextToArray(text.text);
    store.isLoading = false;
    store.startTry();
  } catch (error) {
    requestError.value = error as Error;
  }
};

</script>

<template>
  <to-modal v-if="!store.isTryActive">
    <template #header>Приготовьтесь к печати</template>
    <img class="icon" src="../assets/icons/keyboard.svg" alt="keyboard-icon">
    <to-button @click="startTyping">Начать печатать</to-button>
  </to-modal>
</template>

<style scoped>
.icon {
  @apply self-center w-64;
}
</style>