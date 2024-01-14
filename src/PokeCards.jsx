import React from "react";
import PokeInfo from "./PokeInfo.jsx"
import "./PokeCards.css"


export default function PokeCard(props)
{
    return(
        <div className="pokeCardBorder">
            <div className="pokeCard">
                <PokeInfo id = {props.id}></PokeInfo>
            </div>
        </div>
    )
}