<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigationItems = [
  {
    id: 1,
    name: 'Тренажёр',
    routeName: 'train-screen',
  },
  {
    id: 2,
    name: 'Статистика',
    routeName: 'statistic-screen',
  },
];

const classList = (route: string) => {
  return {
    'navigation__item': true,
    'navigation__item_active': router.currentRoute.value.name === route,
  };
};
</script>

<template>
  <nav class="navigation">
    <div
      v-for="item in navigationItems"
      :key="item.id"
      :class="classList(item.routeName)"
      @click="router.push({ name: item.routeName })"
    >
      <p>{{ item.name }}</p>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  @apply flex items-center h-full;
}

.navigation__item {
  @apply flex items-center h-full px-2 text-white transition-all hover:cursor-pointer hover:bg-blue-300;
}

.navigation__item_active {
  @apply bg-blue-500;
}
</style>