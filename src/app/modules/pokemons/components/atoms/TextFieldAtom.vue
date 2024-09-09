<!-- TextFieldAtom.vue -->
<template>
  <div class="flex gap-2 items-center py-2">
    <span class="font-semibold">{{ label }}:</span>
    <span>{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'TextFieldAtom',
  props: {
    label: {
      type: String as PropType<string>,
      required: true
    },
    value: {
      type: [String, Number] as PropType<string | number>,
      required: true
    }
  }
})
</script>
