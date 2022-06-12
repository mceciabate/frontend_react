import Navegation from './Navigation/navigation';
import './App.css';
import {useState} from "react";
import PokemonCard from './PokemonCard/pokemonCard';
import {pokemonData} from "./pokeIfo";
import { type } from '@testing-library/user-event/dist/type';
function App() {
  const [ pokemon , setPokemon] = useState("mi poke card");
  const arrOfKey = Object.keys(pokemonData);
  const changeView = (param )=>{
    if(param === 0){
      setPokemon(<PokemonCard type={arrOfKey[0]} element= {pokemonData.fire}/>)
    } else if (param === 1){
      setPokemon(<PokemonCard type={arrOfKey[1]} element= {pokemonData.water}/>)
    } else if (param === 2){
      setPokemon(<PokemonCard type={arrOfKey[2]} element= {pokemonData.rock}/>)
    } else if (param === 3){
      setPokemon(<PokemonCard type = {arrOfKey[3] }element= {pokemonData.electric}/>)

    }
  }
  return (
   <div class= "App">
      <h1>App de pokemones</h1>
      <header>
      {
        arrOfKey.map((type, index)=> <Navegation pokemonHandler={changeView} type={type} idx = {index}/>
        )
      }
      </header>{
        pokemon
      }
   </div>
   
  )
}

export default App;
