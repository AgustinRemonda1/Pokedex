import React from "react";
import useLanguage from "../../Core/Hooks/useLanguage";
import {
  Header,
  HeaderBackgroundLayout,
  PokedexTitle,
  NumberTitle,
} from "./PokemonHeader.styled";

const PokemonHeader = () => {
  const { language } = useLanguage();
  return (
    <Header>
      <PokedexTitle>{language.pokedex}</PokedexTitle>
      <HeaderBackgroundLayout>
        <NumberTitle>{language.number}</NumberTitle>
      </HeaderBackgroundLayout>
    </Header>
  );
};

export default PokemonHeader;
