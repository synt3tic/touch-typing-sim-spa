<script setup lang="ts">
import { computed } from 'vue';
import { useSessionStore } from '../stores/SessionStore';
import ToModal from './UI/ToModal.vue';
import ToButton from './UI/ToButton.vue';
import { useStatisticStore } from '../stores/StatisticStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const sessionStore = useSessionStore();
const statisticStore = useStatisticStore();

const typingSpeed = computed(() => Math.round((sessionStore.correctClickCounter / sessionStore.secondsCounter) * 60));
const typingAccuracy = computed(() => Math.round((sessionStore.correctClickCounter / sessionStore.totalClickCounter) * 100));

const saveResult = () => {
  statisticStore.saveRecord(typingSpeed.value, typingAccuracy.value);
  sessionStore.restartTry();
};

const goToStatistic = () => {
  statisticStore.saveRecord(typingSpeed.value, typingAccuracy.value);
  sessionStore.resetValues();
  router.push({ name: 'statistic-screen' });
};
</script>

<template>
  <to-modal>
    <template #header>Ваши результаты</template>
    <p>Скорость печати: <strong>{{ typingSpeed }}</strong> знаков в минуту</p>
    <p>Точность нажатий: <strong>{{ typingAccuracy }}</strong> %</p>
    <to-button @click="saveResult">Попробовать ещё раз</to-button>
    <to-button @click="goToStatistic">Перейти к экрану статистики</to-button>
  </to-modal>
</template>

<style scoped>

</style>