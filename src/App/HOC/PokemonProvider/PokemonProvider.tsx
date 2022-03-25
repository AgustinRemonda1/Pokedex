import React, { FC, useState, ReactNode } from "react";
import { PokemonContext } from "../../Core/Contexts/Pokemon.context";
import { PokemonWithDetailsInterface } from "../../Core/Modules/Pokemon/Interfaces";

interface PokemonProps {
  children: ReactNode;
}

const PokemonProvider: FC<PokemonProps> = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokemonWithDetailsInterface | null>(
    null
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
