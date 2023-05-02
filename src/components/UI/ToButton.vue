<script setup lang="ts">

</script>

<template>
  <button class="to-button">
    <slot />
  </button>
</template>

<style scoped>
.to-button {
  @apply w-full p-3 rounded-2xl bg-purple-400 text-white text-lg hover:bg-purple-500
  active:scale-95 transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:active:scale-100;
}
</style>