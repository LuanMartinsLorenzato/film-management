<template>
  <section class="container-login">
    <div class="wrap-inputs">
      <MoleculeInput label="Login" inputType="text" />
      <MoleculeInput label="Senha" inputType="password" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MoleculeInput from '@/components/molecules/MoleculeInput.vue'
</script>

<style scoped>
.container-login {
  @apply w-4/5 max-w-lg
    h-2/4
    px-4
    py-8
    drop-shadow-2xl 
    bg-gray-300/55 
    rounded-3xl
    flex
    flex-col
    items-center;
}

.wrap-inputs {
  @apply w-11/12 sm:w-4/5 flex flex-col items-center gap-5 h-full transition-all ease-linear duration-300;
}
</style>
