<template>

  <!--  AQUI TENEMOS LAS OPCIONES DE POKEMOS QUE SE GENERAN EN EL DOM -->


  <div class="options-container">
    <ul>
        <!-- LA :KEY ES UN IDENTIFICADOR -->
        <!-- LA PROPS POKEMONS RESIVE VALOR EN POKEMONPAGE, DONDE SE LE PASA UN ARRAY. -->
        <li
        v-for="poke in pokemons"
        :key="poke.id" 
        @click="$emit( 'selec', poke, event )">
        {{poke.name}}
        </li>
    </ul>
  </div>  
</template>


<script>
export default {
  data(){
    return{
    }
  },
  props: {
    pokemons: {

      type: Array,
      requiered: true

    }
  },
  methods: {
    
  }

}
</script>

<style scoped >
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>

