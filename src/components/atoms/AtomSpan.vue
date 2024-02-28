<template>
  <span :class="props.styleType">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import type { PropsAtomSpan } from '@/utils/types'
const props = withDefaults(defineProps<PropsAtomSpan>(), {
  styleType: 'input'
})
</script>

<style scoped>
.input,
.text {
  @apply w-fit h-fit;
}

.input {
  @apply font-semibold;
}
.input::after {
  content: ':';
}

.text {
  @apply font-medium;
}
</style>
