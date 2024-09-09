<!-- ModalFooter.vue -->
<template>
  <div class="flex justify-between items-center mt-4">
    <Button primary @click="emits('share')"> Share to my friends </Button>
    <Circle>
      <span class="cursor-pointer text-4xl" :class="{ 'text-yellow-500 ': favorite }">★</span>
    </Circle>
  </div>
</template>

<script lang="ts" setup>
import Button from '../atoms/Button.vue'
import Circle from '../atoms/Circle.vue'

const { favorite } = defineProps({
  favorite: {
    type: Boolean,
    default: false
  } 
})

const emits = defineEmits(['share'])
</script>
