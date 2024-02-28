<template>
  <OrganismForm @action="submitForm">
    <template #inputs>
      <MoleculeInput label="Nome" inputType="text" />
      <MoleculeInput label="CPF" inputType="text" mask="cpf" />
      <MoleculeInput label="Senha" inputType="password" />
    </template>
    <template #buttons>
      <MoleculeButton type="submit">Salvar</MoleculeButton>
    </template>
  </OrganismForm>
</template>

<script setup lang="ts">
import MoleculeInput from '../molecules/MoleculeInput.vue'
import MoleculeButton from '../molecules/MoleculeButton.vue'
import OrganismForm from './OrganismForm.vue'
//   const emit = defineEmits(['action']);

const submitForm = () => console.log('S')
</script>
