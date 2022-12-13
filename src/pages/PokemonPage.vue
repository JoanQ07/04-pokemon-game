<template>
    <h2>Cual es este Pokemon?</h2>

    <PokemonPicture :pokemonId="50" :showPokemon="true"/>
    <PokemonOptions  :pokemons="pokemonArr"/>    

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/Helpers/Helper/GetPokemonOptions'



export default {
    components: {
        PokemonPicture, PokemonOptions
    },
    data(){

        return {
            pokemonArr: []
        }

    },
    methods: {

        async mixPokemonArray() {

            this.pokemonArr = await getPokemonsOptions()
            console.log(this.pokemonArr)

        }

    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

