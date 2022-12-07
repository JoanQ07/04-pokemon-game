<template>
    <h2>Cual es este Po?</h2>

    <PokemonPicture/>
    <PokemonOptions/>    

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

export default {
    components: {
        PokemonPicture, PokemonOptions
    }
}
</script>

