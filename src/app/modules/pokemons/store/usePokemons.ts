import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { IFavoritesState } from '../interfaces/favorites.interface'

export const usePokemons = defineStore('usePokemons', {
  state: () =>
    <IFavoritesState>{
      favorites: reactive<Record<string, boolean>>({})
    },
  actions: {
    setFavorite(name: string) {
      this.favorites[name] = true
    },
    removeFavorite(name: string) {
      this.favorites[name] = false
    }
  },
  persist: true
})
