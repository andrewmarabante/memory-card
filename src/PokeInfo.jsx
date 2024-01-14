import React, { useState, useEffect } from "react";
import './PokeInfo.css'

export default function PokeInfo(props) {
    const [pokeData, setPokeData] = useState()
    useEffect(
        () => {
            pokeFetch(props.id)
        }, [pokeData]
    )

    const pokeFetch = async (pokeName) => {
        const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)).json();
        setPokeData(data)
    }
    return (
        <div>
            {pokeData ?
                <>    
                    <div className="pokeName">{pokeData.name}</div>
                    <img src={pokeData.sprites.front_default} alt="Not Found" height='300px' className="pokePic"/>
                </> : <><div>loading</div></>}
        </div>
    )
}

