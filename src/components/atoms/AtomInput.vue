<template>
  <MaskInput :mask="MASKS[props.mask as MaskTypes]" class="Input" :name="props.name" :type="props.type" />
</template>

<script setup lang="ts">
import type { MaskTypes, PropsAtomInput } from '@/utils/types';
import { MaskInput } from 'vue-3-mask';
import { MASKS } from '@/utils/constants';


const props = withDefaults(defineProps<PropsAtomInput>(), {
  type: 'text',
  mask: null
})
</script>

<style scoped>
.Input {
  @apply w-full h-9 bg-white/20 rounded-md px-3 font-medium shadow-md focus:outline-none;
}
</style>
