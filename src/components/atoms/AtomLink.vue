<template>
  <div class="link">
    <a href="#" target="_blank">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  @apply w-full font-medium;
}
</style>
