import "../PokemonCard/card.css";
const Card = ({pokemons, type}) =>{
    const objBg= {
        fire: "red",
        water: "blue",
        rock: "grey",
        electric: "yellow"
    }
    
    return(
        <div>
            <h2>Card Pokemon</h2>
            <div className="pokemonCardContainer">
                {
                    pokemons.map(pokemon =>
                        <section className="sectionCard" style= {{backgroundColor: objBg[type]}} key ={pokemon.id}>
                            <p>{pokemon.pokemonName}</p>
                            <img src ={pokemon.avatar} alt ={pokemon.pokemonName}/>

                        </section>
                        )
                }
            </div>
        </div>
    )
};

export default Card;