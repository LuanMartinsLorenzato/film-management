<template>
  <div class="Link">
    <a href="#" target="_blank">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.Link {
  @apply w-full font-medium;
}
</style>
