<template>
    <input class="input" :name="props.name" :type="props.type" />
</template>

<script setup lang="ts">
import type { PropsAtomInput } from '@/utils/types'
const props = withDefaults(defineProps<PropsAtomInput>(), {
    type: 'text'
})

</script>

<style scoped>
    .input {
        @apply w-full h-9 bg-white/20 rounded-md px-3 font-medium;
    }
</style>
