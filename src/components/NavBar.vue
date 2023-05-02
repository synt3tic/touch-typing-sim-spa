<script setup lang="ts">
const navigationItems = [
  {
    id: 1,
    name: 'Тренажёр',
    routeName: 'train',
  },
  {
    id: 2,
    name: 'Статистика',
    routeName: 'statistic',
  },
];
</script>

<template>
  <nav class="navigation">
    <div
      v-for="item in navigationItems"
      :key="item.id"
      class="navigation__item"
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
</style>