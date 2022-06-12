import React from "react";
import Card from "../Card/card";
const PokemonCard = ({ element, type }) =>{
    
    return(
        <React.Fragment>
            <h2>Pokemon Fire</h2>
            <Card pokemons= {element} type ={type}/>
        </React.Fragment>
    )
};

export default PokemonCard;