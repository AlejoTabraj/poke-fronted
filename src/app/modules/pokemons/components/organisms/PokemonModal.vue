<template>
  <div v-if="isOpen" class="poke-card">
    <div class="bg-white rounded-lg shadow-lg p-4 max-w-md relative w-4/5">
      <div class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="emits('close')">
        <Circle> ✖ </Circle>
      </div>
      <img :src="data.image" :alt="data.name" class="w-full h-72 object-cover z-10" />
      <TextFieldAtom label="Name" :value="data.name" />
      <TextFieldAtom label="Weight" :value="data.weight" />
      <TextFieldAtom label="Height" :value="data.height" />
      <TextFieldAtom label="Types" :value="data.types.join(', ')" />

      <ModalFooter @share="share(data)" :favorite="store.favorites[data.name]"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IPokemon } from '../../interfaces/pokemon.interface';
import TextFieldAtom from '../atoms/TextFieldAtom.vue'
import ModalFooter from '../molecules/ModalFooter.vue'
import Circle from '../atoms/Circle.vue'
import { type PropType } from 'vue'
import { usePokemons } from '../../store/usePokemons'

const store = usePokemons()


const { isOpen, data } = defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: true
  },
  data: {
    type: Object as PropType<{
      name: string
      weight: number
      height: number
      types: string[]
      image: string
    }>,
    required: true
  }
})

const emits = defineEmits(['close'])

const share = (data: IPokemon) => {
  const formattedString = `name: ${data.name}, types: ${data.types?.join(", ")}, height: ${data.height}`
  navigator.clipboard.writeText(formattedString).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Error copying to clipboard: ', err)
    });
}
</script>
