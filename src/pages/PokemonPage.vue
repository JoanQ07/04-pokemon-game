<template>
    <h2>Cual es este Pokemon?</h2>

    <PokemonPicture :pokemonId="50" :showPokemon="true"/>
    <PokemonOptions/>    

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/Helpers/Helper/GetPokemonOptions';

console.log(getPokemonsOptions())

export default {
    components: {
        PokemonPicture, PokemonOptions
    }
}
</script>

