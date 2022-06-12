import React from "react";
import "./navigation.css"
const Navegation = ({pokemonHandler, type, idx}) =>{
    const objBg= {
        fire: "red",
        water: "blue",
        rock: "grey",
        electric: "yellow"
    }
    return(
        <React.Fragment>
            <button onClick={()=> pokemonHandler(idx)} style= {{backgroundColor : objBg[type]}}>Pokemon {type}</button>
            
        </React.Fragment>
    )
}

export default Navegation;