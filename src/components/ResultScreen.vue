<script setup lang="ts">
import { computed } from 'vue';
import { useSessionStore } from '../stores/SessionStore';
import ToModal from './UI/ToModal.vue';
import ToButton from './UI/ToButton.vue';

const store = useSessionStore();

const typingSpeed = computed(() => Math.round((store.correctClickCounter / store.secondsCounter) * 60));
const typingAccuracy = computed(() => Math.round((store.correctClickCounter / store.totalClickCounter) * 100));
</script>

<template>
  <to-modal v-if="store.isResultScreenVisible">
    <template #header>Ваши результаты</template>
    <p>Скорость печати: <strong>{{ typingSpeed }}</strong> знаков в минуту</p>
    <p>Точность нажатий: <strong>{{ typingAccuracy }}</strong> %</p>
    <to-button>Попробовать ещё раз</to-button>
  </to-modal>
</template>

<style scoped>

</style>