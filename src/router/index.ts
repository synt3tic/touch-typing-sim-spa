import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TrainingScreen from '../components/TrainingScreen.vue';
import StatisticsScreen from '../components/StatisticsScreen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'train-screen',
    component: TrainingScreen,
  },
  {
    path: '/statistic',
    name: 'statistic-screen',
    component: StatisticsScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;