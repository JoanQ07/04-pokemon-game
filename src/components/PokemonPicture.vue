<template>

  <div>
    <div class="pokemon-container">
        <img
          :src="this.imgSrc"
          alt="Pokemon"
          class="hidden-pokemon"
          >
    
        <img v-if="this.showPokemon"
          :src="this.imgSrc"
          alt="Pokemon"
          class="fade-in">
    
    </div>
  </div>



</template>

<script>


export default {
  

  props: {
    pokemonId: {
      type: Number, 
      required: true  
    },
    showPokemon:{
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {

    imgSrc(){

      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`

    }


  },
  methods: {


  }

}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    position: relative;
}

img {
    height: 200px;
    position:absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>
