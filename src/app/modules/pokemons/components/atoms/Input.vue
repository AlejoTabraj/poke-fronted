<template>
  <input
    v-model="modelValue"
    class="w-full p-2 placeholder:font-light outline-none"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
const modelValue = defineModel('ModelValue')
const { placeholder } = defineProps({
  placeholder: {
    type: String,
    required: true
  }
})
</script>
