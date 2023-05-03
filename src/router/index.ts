import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TrainScreen from '../components/TrainScreen.vue';
import StatisticsScreen from '../components/StatisticsScreen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'train-screen',
    component: TrainScreen,
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