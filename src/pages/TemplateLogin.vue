<template>
  <div class="TemplateLogin">
    <!-- <div class="ContainerFlip">

    </div> -->
    <OrganismLogin @action="handleOrganism" v-if="!isActiveRegister"/>
    <OrganismRegister v-else/>
  </div>
</template>
<script setup lang="ts">
import OrganismLogin from '@/components/organisms/OrganismLogin.vue';
import OrganismRegister from '@/components/organisms/OrganismRegister.vue';
import { ref } from 'vue';

const isActiveRegister = ref<boolean>(false);

const handleOrganism = () => isActiveRegister.value = !isActiveRegister.value;

</script>

<style scoped>
.TemplateLogin {
  @apply w-full h-full flex justify-center items-center bg-gray-50
}
</style>
