<template>
  <OrganismForm @action="submitForm">
    <template #inputs>
      <MoleculeInput label="Name" inputType="text" @action="updateFormData" required />
      <MoleculeInput label="Password" inputType="password" @action="updateFormData" required />
      <AtomLink>Forgot password</AtomLink>
    </template>
    <template #buttons>
      <MoleculeButton @action="registerForm">Sign Up</MoleculeButton>
      <MoleculeButton type="submit">Sign In</MoleculeButton>
    </template>
  </OrganismForm>
</template>

<script setup lang="ts">
import MoleculeInput from '../molecules/MoleculeInput.vue'
import MoleculeButton from '../molecules/MoleculeButton.vue'
import OrganismForm from './OrganismForm.vue'
import AtomLink from '../atoms/AtomLink.vue'
import type { FormDataInterface } from '@/utils/types'
import { userServices } from '@/services/UserServices'
import { ref } from 'vue'

const formData = ref<FormDataInterface>({});

const updateFormData = ([value, key]: string) => {
  formData.value[key.toLocaleLowerCase()] = value
}
const emit = defineEmits(['action', 'login']);

const registerForm = () => emit('action');

const submitForm = () => {
  userServices
    .userLogin(formData.value)
    .then(() => {emit('login')})
    .catch((error) => console.log(error))
}
</script>
