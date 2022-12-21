<template>

    
    <h1 v-if="!pokemon" >Espere por favor..!!</h1>
    <div v-else>
        <h1 v-if="mensaje" :style="{ fontSize: '2.5rem', color: 'lightgreen' }"> {{mensaje}} </h1>
        <h2 v-else>Cual es este Pokemon?</h2>
        <!-- Se le da una valor a las props  -->
        <PokemonPicture
            :pokemonId="pokemon.id"
            :showPokemon="estadoPicture" />
        <PokemonOptions
            @selec="validar($event, color)"
            :pokemons="pokemonArr"
            /> 

        <button @click="reload" > -- RELOAD -- </button>

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
            mensaje: null,
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
        validar(pokeOptions , colors){
            if(pokeOptions === this.pokemon){
                this.estadoPicture = true
                this.mensaje = ` Correcto, ${ this.pokemon.name }!`
                console.log(colors, 'asda')
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

        },
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style scoped>


.button {
  /* Estilos básicos */
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  /* Estilos de transición */
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.button:hover {
  /* Estilos al pasar el cursor por encima */
  background-color: #666;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.button:active {
  /* Estilos al presionar el botón */
  background-color: #999;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}





</style>

