import pokemonApi from "@/assets/api/pokemonApi"


//crearcion de array
    const getPokemons = () => {

        const pokemonsArr = Array.from(Array(650))

        return pokemonsArr.map(( x , index ) => index + 1 )
        
    }
    
    //Declrar array  (getPokemons) aleatorio
    const  getPokemonsOptions = async() => {
 
        const mixPokemon = getPokemons()
                            .sort( () => Math.random() - 0.5 )

        const pokemons = await getPokemosNames(mixPokemon.splice(0,4))

        console.table(pokemons)

    }
    
// Destructuracion de array getpokemosNames 

    const  getPokemosNames = async ( [a,b,c,d] = []) => {

        // Peticion GET
        const promiseArr = [
            pokemonApi.get(`/${ a }`),
            pokemonApi.get(`/${ b }`),
            pokemonApi.get(`/${ c }`),
            pokemonApi.get(`/${ d }`),
        ]

        // Destructuracion de la peticions GET
        const [p1, p2, p3, p4] = await Promise.all( promiseArr )

        return [
            { name: p1.data.name , id: p1.data.id},
            { name: p2.data.name , id: p2.data.id},
            { name: p3.data.name , id: p3.data.id},
            { name: p4.data.name , id: p4.data.id},
        ]


    }



export default getPokemonsOptions;