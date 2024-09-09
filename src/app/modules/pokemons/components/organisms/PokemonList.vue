<template>
  <PokemonCard
    v-for="pokemon in pokemons"
    v-bind:key="pokemon.name"
    @click="openModalDetails(pokemon.name)"
    :name="pokemon.name"
    :favorites="favorites"
    :searchValue="searchValue"
  />
  <PokemonModal :isOpen="isOpen" @close="close" :data="pokemon" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PokemonCard from '../molecules/PokemonCard.vue'
import PokemonModal from './PokemonModal.vue'
import PokemonService from '../../services/PokemonService'

const service = new PokemonService()
const pokemons = service.getPokemons()
const pokemon = service.getPokemon()

const { favorites, searchValue } = defineProps({
  favorites: {
    type: Boolean,
    default: false
  },
  searchValue: {
    type: String
  }
})

onMounted(async () => {
  await service.fetchAll()
})

const isOpen = ref(false)
const openModalDetails = async (name: string) => {
  await service.fetchOne(name)
  isOpen.value = true
}
const close = () => {
  isOpen.value = false
}
</script>
