<template>
  <MaskInput
    :mask="setMask()"
    class="Input"
    :name="props.name"
    :type="props.type"
    v-model="value"
    v-if="withMask"
  />
  <input class="Input" :name="props.name" :type="props.type" v-model="value" v-else />
</template>

<script setup lang="ts">
import type { MaskTypes, PropsAtomInput } from '@/utils/types'
import { MaskInput } from 'vue-3-mask'
import { MASKS } from '@/utils/constants'
import { onMounted, ref } from 'vue'

const value = ref<string>('')
const withMask = ref<boolean>(false)
const props = withDefaults(defineProps<PropsAtomInput>(), {
  type: 'text'
})

const checkInput = () => {
  console.log(props.mask, !props.mask)
  if (!props.mask) return (withMask.value = false)
}
const setMask = () => (props.mask ? MASKS[props.mask as MaskTypes] : null)

onMounted(() => checkInput())
</script>

<style scoped>
.Input {
  @apply w-full h-9 bg-white/20 rounded-md px-3 font-medium shadow-md focus:outline-none;
}
</style>
