<template>
  <section class="container-login">
    <div class="wrap-inputs">
      <MoleculeInput label="Login" inputType="text" />
      <MoleculeInput label="Senha" inputType="password" />
      <AtomLink>{{ FORGETPASSWORD }}</AtomLink>
    </div>
    <div class="wrap-buttons">
      <MoleculeButton>Cadastre-se</MoleculeButton>
      <MoleculeButton>Entrar</MoleculeButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import MoleculeInput from '../molecules/MoleculeInput.vue'
import AtomLink from '../atoms/AtomLink.vue'
import { FORGETPASSWORD } from '@/utils/constants'
import MoleculeButton from '../molecules/MoleculeButton.vue';
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
  @apply w-11/12 sm:w-4/5 h-fit flex flex-col items-center gap-5 transition-all ease-linear duration-300;
}

.wrap-buttons {
  @apply w-11/12 sm:w-4/5 h-10 mt-auto flex justify-between transition-all ease-linear duration-300;
}
</style>
