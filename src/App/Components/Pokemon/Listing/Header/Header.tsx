import React from "react";
import useLanguage from "../../../../Core/Hooks/useLanguage";
import {
  PokemonHeader,
  HeaderBackgroundLayout,
  PokedexTitle,
  NumberTitle,
} from "./Header.styled";

const Header = () => {
  const { language } = useLanguage();
  return (
    <PokemonHeader>
      <PokedexTitle>{language.pokedex}</PokedexTitle>
      <HeaderBackgroundLayout>
        <NumberTitle>{language.number}</NumberTitle>
      </HeaderBackgroundLayout>
    </PokemonHeader>
  );
};

export default Header;
