<template>
    <label :for="props.label" class="ContainerInput">
        <AtomSpan>{{ props.label }}</AtomSpan>
        <AtomInput :type="props.inputType" :name="props.label" :mask="props.mask"/>
    </label>
</template>

<script setup lang="ts">
import AtomSpan from '@/components/atoms/AtomSpan.vue'
import AtomInput from '@/components/atoms/AtomInput.vue';
import type { PropsMoleculeInput } from '@/utils/types'

const props = defineProps<PropsMoleculeInput>();
</script>

<style scoped>
    .ContainerInput {
        @apply w-full h-fit flex gap-2 flex-col
    }
</style>
