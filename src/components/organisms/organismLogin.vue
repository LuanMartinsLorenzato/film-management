<template>
  <OrganismForm @action="submitForm">
    <template #inputs>
      <MoleculeInput label="Name" inputType="text" />
      <MoleculeInput label="Password" inputType="password"  />
      <AtomLink>Forgot password</AtomLink>
    </template>
    <template #buttons>
      <MoleculeButton @action="registerForm">Sign Up</MoleculeButton>
      <MoleculeButton>Sign In</MoleculeButton>
    </template>
  </OrganismForm>
</template>

<script setup lang="ts">
import MoleculeInput from '../molecules/MoleculeInput.vue'
import MoleculeButton from '../molecules/MoleculeButton.vue'
import OrganismForm from './OrganismForm.vue'
import AtomLink from '../atoms/AtomLink.vue';

const emit = defineEmits(['action']);
const registerForm = () => emit('action');
const submitForm = () => console.log('S')

</script>
