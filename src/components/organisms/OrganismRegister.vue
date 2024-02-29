<template>
  <OrganismForm @action="submitForm">
    <template #inputs>
      <MoleculeInput label="Name" inputType="text" @action="updateFormData" required/>
      <MoleculeInput label="CPF" inputType="text" mask="cpf" @action="updateFormData" required/>
      <MoleculeInput label="Password" inputType="password" @action="updateFormData" required/>
    </template>
    <template #buttons>
      <MoleculeButton type="submit">Save</MoleculeButton>
    </template>
  </OrganismForm>
</template>

<script setup lang="ts">
import MoleculeInput from '../molecules/MoleculeInput.vue'
import MoleculeButton from '../molecules/MoleculeButton.vue'
import OrganismForm from './OrganismForm.vue'
import type { FormDataInterface } from '@/utils/types'
import { userServices } from '@/services/UserServices'

const formData: FormDataInterface = {};

const updateFormData = ([value, key]: string) => {
  formData[key.toLocaleLowerCase()] = value
};

const submitForm = () => userServices.createUser(formData);
</script>
