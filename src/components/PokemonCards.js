
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import {backgroundAccordingToType, colorAccordingToType} from '../utilities/cardsBackground';



function PokemonCards({pokeUrl}) {
    const [ pokemon, setPokemon ] = useState({});
    useEffect(()=>{
        axios.get(pokeUrl).then(res => {
                console.log(res.data);
                setPokemon(res.data)
            })
    },[ pokeUrl ]);
    const pokemonType = pokemon.types?.[0].type.name;
    
    return (
    <div className='PokemonCard' style={{background:backgroundAccordingToType(pokemonType)}}>
        <Link style={{textDecoration: 'none'}} to={`/pokedex/${pokemon.name}`} >
            <div className='containerImg' >
                <img src={pokemon.sprites?.front_default} alt='pokemon'/>
            </div>
            <div className='containerInfo'  style={{color:colorAccordingToType(pokemonType)}} >
                <h2>{pokemon.name}</h2>
                <h3>{pokemonType}</h3>
                <p>TIPO</p>
                <p className='secStats borderTop'>
                    <span>
                        <p>HP</p>
                        <h4>{pokemon.stats?.[0].base_stat}</h4>
                    </span>
                    <span>
                        <p>ATAQUE</p>
                        <h4>{pokemon.stats?.[1].base_stat}</h4>
                    </span>
                </p>
                <p className='secStats'>
                    <span>
                        <p>DEFENSA</p>
                        <h4>{pokemon.stats?.[2].base_stat}</h4>
                    </span>
                    <span>
                        <p>VELOCIDAD</p>
                        <h4>{pokemon?.stats?.[5].base_stat}</h4>
                    </span>
                </p>
            </div>
        </Link>
    </div>
    );
}

export default PokemonCards;