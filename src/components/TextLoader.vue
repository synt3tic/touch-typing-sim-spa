<template>
  <div class="text-field">
    <p>Загрузка. Пожалуйста подождите</p>
  </div>
</template>

<style scoped>
.text-field {
  @apply flex items-center justify-center w-224 p-3 whitespace-pre-wrap text-lg font-medium 
  bg-white rounded-2xl;
}

.text-field p {
  @apply text-3xl animate-pulse;
}
</style>