import React, { useState, useEffect } from "react"
import PokeCard from "./PokeCards.jsx"
import "./App.css"
import { v4 } from 'uuid';

const pokeNames = ['pikachu', 'bulbasaur', 'snorlax', 'charmander', 'squirtle', 'eevee', 'growlithe', 'charmeleon', 'pidgey', 'rattata', 'ekans', 'sandshrew', 'gengar', 'sandslash', 'nidorina', 'nidoqueen', 'nidoking', 'vulpix', 'ninetales', 'jigglypuff', 'zubat', 'golbat', 'ivysaur', 'venusaur', 'charizard', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgeotto', 'pidgeot', 'raticate', 'spearow', 'fearow', 'arbok', 'raichu', 'oddish', 'gloom', 'vileplume', 'diglett', 'dugtrio', 'meowth', 'psyduck', 'mankey', 'primeape', 'arcanine']
function App() {
  const [pokeArray, setPokeArray] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [pickedPoke, setPickedPoke] = useState([])
  const [highScore, setHighScore] = useState(0)

  function changePokemon(e) {
    if (e.target.className === 'pokeCard' || e.target.className === 'pokeCardBorder') { return }
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.id)
    let tempPokeArray = [];
    while (tempPokeArray.length < 8) {
      let x = Math.floor(Math.random() * 50);
      if (!tempPokeArray.includes(x)) {
        tempPokeArray.push(x);
      }
    }
    setPokeArray(tempPokeArray);
    let tempPickedPoke = pickedPoke;
    if (tempPickedPoke.includes(e.target.parentNode.parentNode.parentNode.parentNode.id)) {
      alert('You Lose: Click any card to play again')
      setHighScore(pickedPoke.length)
      setPickedPoke([])
    }
    else {
      tempPickedPoke.push(e.target.parentNode.parentNode.parentNode.parentNode.id)
      setPickedPoke(tempPickedPoke);
    }
    console.log(pickedPoke.length)
  }

  return (
    <div>
      <div id="top">
        <h1>Pokemon Memory Game</h1>
      </div>
      <div id="cardCont">
        {
          pokeArray.map((poke) => {
            return (
              <div key={v4()} onClick={changePokemon} id={pokeNames[poke]}>
                <PokeCard id={pokeNames[poke]} />
              </div>
            )
          })
        }
      </div>
      <div id="bot">
        <div className="score">
          <p>Current Score:</p>
          {pickedPoke.length}
        </div>
        <div className="score">
          <p>High Score:</p>
          {highScore}
        </div>
      </div>
    </div>
  )
}

export default App
