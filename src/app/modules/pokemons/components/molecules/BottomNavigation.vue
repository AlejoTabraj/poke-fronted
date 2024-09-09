<template>
  <div
    class="fixed bottom-0 left-0 w-full flex justify-center gap-6 bg-white shadow-2xl shadow-black p-4"
  >
    <Button @action="emits('all')" :primary="!favorites"> <span class="mr-2">📋</span> All </Button>
    <Button @action="emits('favorites')" :primary="favorites">
      <span class="mr-2 text-2xl">★</span> Favorites
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '../atoms/Button.vue'
const emits = defineEmits(['all', 'favorites'])
const { favorites } = defineProps({
  favorites: {
    type: Boolean,
    required: true
  }
})
</script>
