<template>
  <button
    v-if="searchValue ? name.includes(searchValue) : favorites ? store.favorites[name] : !favorites"
    class="flex justify-between items-center p-4 mb-2 bg-white rounded-lg cursor-pointer w-full"
  >
    <span class="text-lg font-medium">{{ name }}</span>
    <Circle @click.stop="store.favorites[name] = !store.favorites[name]">
      <span v-if="store.favorites[name]" class="text-yellow-500 text-4xl">★</span>
      <span v-else class="text-white text-4xl">★</span>
    </Circle>
  </button>
</template>

<script lang="ts" setup>
import Circle from '../atoms/Circle.vue'
import { usePokemons } from '../../store/usePokemons'

const store = usePokemons()
const { name, searchValue } = defineProps({
  name: {
    type: String,
    required: true
  },
  favorites: {
    type: Boolean,
    required: true
  },
  searchValue: {
    type: String
  }
})
</script>
