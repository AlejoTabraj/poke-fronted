import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PokedexListView from '../pages/PokedexListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Pokedex",
      component: HomeView
    },
    {
      path: "/pokemon-list",
      name: "pokemonList",
      component: PokedexListView
    }
  ]
})

export default router
