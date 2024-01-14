import React from "react"
import PokeCard from "./PokeCards.jsx"
import "./App.css"

const pokeNames = ['pikachu', 'bulbasaur', 'snorlax', 'charmander', 'squirtle', 'eevee', 'growlithe', 'charmeleon']
function App() {
  return (
    <div>
      <div id="top">
      <h1>Pokemon Memory Game</h1>
      </div>
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
