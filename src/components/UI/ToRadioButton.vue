<script setup lang="ts">
interface Props {
  checked?: boolean;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  value: 'radiobutton',
});

const emit = defineEmits(['update:checked']);

const emitChange = (e: Event) => {
  emit('update:checked', (e.target as HTMLInputElement).checked)
};
</script>

<template>
  <label class="to-radio">
    <slot />
    <input
      :value="props.value"
      :checked="checked"
      type="radio"
      name="radio"
      @change="emitChange"
    >
    <span class="checkmark" />
  </label>
</template>

<style scoped>
.to-radio {
  @apply block relative pl-8 pl-6 text-sm text-left cursor-pointer select-none;
}
.to-radio input {
  @apply absolute opacity-0 cursor-pointer h-0 w-0;
}
.checkmark {
  @apply absolute top-0 left-0 w-5 h-5 bg-white border border-solid border-blue-500 rounded-full
  after:content-[''] after:absolute after:hidden after:left-2 after:top-0.5 after:w-1 
  after:h-3;
}
.to-radio input ~ .checkmark {
  @apply hover:border hover:border-solid hover:border-blue-800 hover:duration-300 checked:duration-300;
}
.to-radio input:checked ~ .checkmark {
  @apply bg-blue-500 after:block border-blue-800;
}
.to-radio .checkmark {
  @apply after:border after:border-solid after:border-white after:border-t-0 after:border-r after:border-b
  after:border-l-0 after:rotate-45;
}
</style>