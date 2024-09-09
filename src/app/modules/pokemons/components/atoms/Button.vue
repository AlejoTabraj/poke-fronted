<template>
  <button
    class="base-button"
    :class="{ 'bg-[#bfbfbf]': !primary, 'primary-bg-color': primary }"
    @click="emits('action')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const { primary } = defineProps({
  primary: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['action'])
</script>
