import React from "react"
import PokeCard from "./PokeCards.jsx"
import "./App.css"

const pokeNames = ['pikachu', 'bulbasaur', 'snorlax', 'charmander', 'squirtle', 'eevee', 'growlithe', 'charmeleon']
function App() {
  return (
    <div>
      <h1>Pokemon</h1>
      <div id="cardCont">
          {
            pokeNames.map((pokeName) => {
              return(
              <PokeCard key = {pokeName} id = {pokeName} />
              )
            })
        }
      </div>
    </div>
  )
}

export default App
