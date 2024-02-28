<template>
  <div class="Template-login">
    <OrganismLogin />
  </div>
</template>
<script setup lang="ts">
import OrganismLogin from '@/components/organisms/organismLogin.vue';

</script>

<style scoped>
.Template-login {
  @apply w-full h-full flex justify-center items-center bg-gray-50
}
</style>
