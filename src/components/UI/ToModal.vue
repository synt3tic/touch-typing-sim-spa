<template>
  <div class="to-modal">
    <div class="to-modal__window">
      <h2><slot name="header" /></h2>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.to-modal {
  @apply absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-black/40;
}

.to-modal__window {
  @apply flex flex-col gap-4 w-96 p-4 text-center bg-white rounded-2xl;
}

.to-modal__window h2 {
  @apply text-2xl font-semibold;
}
</style>