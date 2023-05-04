<script setup lang="ts">
import ToModal from './UI/ToModal.vue';
import ToButton from './UI/ToButton.vue';
import { useStatisticStore } from '../stores/StatisticStore';
import { useRouter } from 'vue-router';

interface Props {
  correctClicks: number;
  totalClicks: number;
  seconds: number;
}

const props = defineProps<Props>();
const emit = defineEmits(['restartTry']);
const router = useRouter();
const store = useStatisticStore();

const typingSpeed = () => Math.round((props.correctClicks / props.seconds) * 60);
const typingAccuracy = () => Math.round((props.correctClicks / props.totalClicks) * 100);

const tryAgain = () => {
  store.saveRecord(typingSpeed(), typingAccuracy());
  emit('restartTry');
};

const goToStatistic = () => {
  store.saveRecord(typingSpeed(), typingAccuracy());
  router.push({ name: 'statistic-screen' });
};
</script>

<template>
  <to-modal>
    <template #header>Ваши результаты</template>
    <p>Скорость печати: <strong>{{ typingSpeed() }}</strong> зн./мин.</p>
    <p>Точность нажатий: <strong>{{ typingAccuracy() }}</strong> %</p>
    <to-button @click="tryAgain">Попробовать ещё раз</to-button>
    <to-button @click="goToStatistic">Перейти к экрану статистики</to-button>
  </to-modal>
</template>