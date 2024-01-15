import React, { useState, useEffect } from "react";
import './PokeInfo.css'

export default function PokeInfo(props) {
    const [pokeData, setPokeData] = useState()
    const [showComponent, setShowComponent] = useState(false);
    useEffect(
        () => {
            pokeFetch(props.id)
        }, [pokeData]
    )

    useEffect(() => { 
        const timeout = setTimeout(() => { 
          setShowComponent(true); 
        }, 1000); 
     
        return () => clearTimeout(timeout); 
      }, []); 


    const pokeFetch = async (pokeName) => {
        const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)).json();
        setPokeData(data)
    }
    return (
        <div>
            {showComponent && pokeData ?
                <>    
                    <div className="pokeName">{pokeData.name}</div>
                    <img src={pokeData.sprites.front_default} alt="Not Found" height='300px' className="pokePic"/>
                </> : 
                <>
                    <img src="../public/images/pokeBack.avif" height='354px' width='300' className="pokeBack"></img>
                </>}
        </div>
    )
}

