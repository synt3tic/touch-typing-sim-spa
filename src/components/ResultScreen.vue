<script setup lang="ts">
import { computed } from 'vue';
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
const emit = defineEmits(['restartTry'])
const router = useRouter();
const store = useStatisticStore();

const typingSpeed = computed(() => Math.round((props.correctClicks / props.seconds) * 60));
const typingAccuracy = computed(() => Math.round((props.correctClicks / props.totalClicks) * 100));

const saveResult = () => {
  store.saveRecord(typingSpeed.value, typingAccuracy.value);
  emit('restartTry');
};

const goToStatistic = () => {
  store.saveRecord(typingSpeed.value, typingAccuracy.value);
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