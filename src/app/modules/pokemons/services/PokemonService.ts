import { ref, type Ref } from 'vue'
import type { IPokemon, IPokemonInfo } from '../interfaces/pokemon.interface'

class PokemonService {
  private pokemons: Ref<Array<IPokemonInfo>>
  private pokemon: Ref<IPokemon>

  constructor() {
    this.pokemons = ref([])
    this.pokemon = ref({})
  }

  getPokemons(): Ref<Array<IPokemonInfo>> {
    return this.pokemons
  }

  getPokemon(): Ref<IPokemon> {
    return this.pokemon
  }

  async fetchAll(): Promise<void> {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const json = await response.json()
      this.pokemons.value = json.results
    } catch (error) {
      console.error(error)
    }
  }

  async fetchOne(name: string): Promise<void> {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const json = await response.json()
      const { other } = json.sprites
      this.pokemon.value = {
        name: json.name,
        weight: json.weight,
        height: json.height,
        image: other['official-artwork']['front_default'],
        types: json.types.map(({ type }: { type: { name: string } }) => type.name)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default PokemonService
