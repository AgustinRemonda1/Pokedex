import React, { FC } from "react";
import { PokemonWithDetailsInterface } from "core/Modules/Pokemon/Interfaces";
import { capitalizeStrings } from "utils";
import { PokemonImageWrapper, PokemonImageHeader } from "./ImageDetails.styled";

interface ImageDetailsProps {
  pokemon: PokemonWithDetailsInterface | null;
}

const PokemonImageDetails: FC<ImageDetailsProps> = ({ pokemon }) => {
  const pokemonImage = pokemon
    ? pokemon.sprites.other.dream_world.front_default
    : "";
  const pokemonName = pokemon ? pokemon.name : "";

  return (
    <PokemonImageWrapper>
      <PokemonImageHeader>{capitalizeStrings(pokemonName)}</PokemonImageHeader>
      <img src={pokemonImage} alt={pokemonName} />
    </PokemonImageWrapper>
  );
};

export default PokemonImageDetails;
