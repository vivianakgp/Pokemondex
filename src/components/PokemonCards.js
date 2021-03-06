import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  backgroundAccordingToType,
  colorAccordingToType,
} from "../utilities/cardsBackground";

function PokemonCards({ pokeUrl }) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios.get(pokeUrl).then((res) => {
      console.log(res.data);
      setPokemon(res.data);
    });
  }, [pokeUrl]);
  const pokemonType = pokemon.types?.[0]?.type.name;
  const pokemonType2 = pokemon.types?.[1]?.type.name;
  const shortName = () => {
    if (pokemon.name?.length <= 11) {
      return ".8em";
    } else {
      return ".6em";
    }
  };
  return (
    <div
      className="PokemonCard"
      style={{ background: backgroundAccordingToType(pokemonType) }}
    >
      <Link style={{ textDecoration: "none" }} to={`/pokedex/${pokemon.name}`}>
        <div className="containerImg">
          <img src={pokemon.sprites?.front_default} alt="pokemon" />
        </div>
        <div
          className="containerInfo"
          style={{ color: colorAccordingToType(pokemonType) }}
        >
          <h2 style={{ fontSize: shortName() }}>{pokemon.name}</h2>
          <h3>
            {pokemonType}/{pokemonType2}
          </h3>
          <p>TIPO</p>
          <section className="secStats borderTop">
            <span>
              <span>HP</span>
              <h4>{pokemon.stats?.[0].base_stat}</h4>
            </span>
            <span>
              <span>ATAQUE</span>
              <h4>{pokemon.stats?.[1].base_stat}</h4>
            </span>
          </section>
          <section className="secStats">
            <span>
              <span>DEFENSA</span>
              <h4>{pokemon.stats?.[2].base_stat}</h4>
            </span>
            <span>
              <span>VELOCIDAD</span>
              <h4>{pokemon?.stats?.[5].base_stat}</h4>
            </span>
          </section>
        </div>
      </Link>
    </div>
  );
}

export default PokemonCards;
