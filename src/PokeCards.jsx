import React from "react";
import PokeInfo from "./PokeInfo.jsx"


export default function PokeCard(props)
{
    return(
        <div id="pokeCard">
            <PokeInfo id = {props.id}></PokeInfo>
        </div>
    )
}