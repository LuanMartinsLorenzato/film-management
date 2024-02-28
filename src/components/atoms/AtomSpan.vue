<template>
    <span :class="props.style">{{ props.text }}</span>
</template>

<script setup lang="ts">
import type { PropsAtomSpan } from '@/utils/types'
const props = withDefaults(defineProps<PropsAtomSpan>(), {
    style: 'input'
})

</script>

<style scoped>
    .input, .text {
        @apply w-fit h-fit;
    }

    .input {
        @apply font-semibold
    }
    .input::after {
        content: ':';
    }

    .text {
        @apply font-medium
    }
</style>
