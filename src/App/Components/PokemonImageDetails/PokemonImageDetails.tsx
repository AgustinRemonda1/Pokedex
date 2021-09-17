import React, { FC } from "react";
import { PokemonWithDetailsInterface } from "src/App/Core/Interfaces/Pokemon.interface";
import { capitalizeStrings } from "src/App/Utils/FormatStrings.utils";
import {
  PokemonImageWrapper,
  PokemonImageHeader,
} from "./PokemonImageDetails.styled";

interface PokemonImageDetailsProps {
  pokemon: PokemonWithDetailsInterface | null;
}

const PokemonImageDetails: FC<PokemonImageDetailsProps> = ({ pokemon }) => {
  const pokemonImage = pokemon?.sprites.other.dream_world.front_default;
  const pokemonName = pokemon ? pokemon.name : "";

  return (
    <PokemonImageWrapper>
      <PokemonImageHeader>{capitalizeStrings(pokemonName)}</PokemonImageHeader>
      <img src={pokemonImage} alt={pokemonName} />
    </PokemonImageWrapper>
  );
};

export default PokemonImageDetails;
