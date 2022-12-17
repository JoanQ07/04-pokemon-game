<template>

    
    <h1 v-if="!pokemon" >Espere por favor..!!</h1>
    <div v-else>
        <h2>Cual es este Pokemon?</h2>
        <!-- Se le da una valor a las props  -->
        <PokemonPicture
            :pokemonId="pokemon.id"
            :showPokemon="estadoPicture" />
        <PokemonOptions
            @selec="validar($event, event)"
            :pokemons="pokemonArr"
            /> 

        <h1  style="color: green"> {{mensaje}} </h1>
        <button @click="reload">
            -- RELOAD --
        </button>

    </div>

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
            estadoPicture: false,
            mensaje: "",
            pokemonArr: [],
            pokemon: null,
        }

    },
    methods: {

        async mixPokemonArray() {

            this.pokemonArr = await getPokemonsOptions()
            //Se genera el pokemon aleatorio, dandole un indice aleatorio al array
            this.pokemon = this.pokemonArr[ Math.floor( Math.random() * 4 )  ]
        },
        validar(pokeOptions,){
            if(pokeOptions === this.pokemon){
                this.estadoPicture = true
                this.mensaje = ` Correcto, ${ this.pokemon.name }!`
                console.log(event, 'asda')
            }
             else{
                this.mensaje = `Oops, era ${ this.pokemon.name }`
            }


        },
        reload(){

            this.estadoPicture = false,
            this.pokemonArr = []
            this.mensaje = ""
            this.mixPokemonArray()    

        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

