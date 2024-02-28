<template>
  <button class="container-button">
    <AtomSpan styleType="text"><slot></slot></AtomSpan>
  </button>
</template>

<script setup lang="ts">
import AtomSpan from '@/components/atoms/AtomSpan.vue'
</script>

<style scoped>
.container-button {
  @apply w-fit px-6 py-2 shadow-md bg-white/20 h-fit rounded-xl;
}
</style>
