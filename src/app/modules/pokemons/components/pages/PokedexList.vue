<template>
    <div class="gray-bg p-10 bg-[#f9f9f9] mh-screen flex justify-center">
      <div class="w-full max-w-4xl">
        <search-input v-model:-model-value="searchValue"></search-input>
        <PokemonList :favorites="favorites" :searchValue="searchValue" />
        <BottomNavigation @all="getAll" @favorites="getFavorites" :favorites="favorites" />
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import BottomNavigation from '../molecules/BottomNavigation.vue'
  import SearchInput from '../molecules/SearchInput.vue'
  import PokemonList from '../organisms/PokemonList.vue'
  import { ref } from 'vue'
  
  const searchValue = ref('')
  const favorites = ref(false)
  
  const getAll = () => {
    favorites.value = false
  }
  const getFavorites = () => {
    favorites.value = true
  }
  </script>
  