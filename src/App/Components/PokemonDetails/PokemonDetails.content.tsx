import React from "react";
import { capitalizeStrings } from "../../Utils/FormatStrings.utils";
import Button from "../SharedComponents/Button/Button.component";
import SimpleFlexTable from "../SharedComponents/SimpleFlexTable/SimpleFlexTable.component";
import { generateActionButtons } from "./PokemonDetails.config";
import {
  PokemonDetailsContainer,
  PokemonDetailsGrid,
  PokemonImageWrapper,
  PokemonImageHeader,
  PokemonDetailLayoutTable,
  HeaderButtonsContainer,
  FooterButtonsContainer,
} from "./PokemonDetails.styles";
import { PokemonDetailsContentProps } from "./PokemonDetails.interfaces";

const PokemonDetailsContent = ({
  pokemonSelected,
  modeButtons,
  configMode,
  language,
  handleBackToPokemonList,
  lang,
  changeLanguage,
}: PokemonDetailsContentProps) => {
  const pokemonImage = pokemonSelected?.sprites.other.dream_world.front_default;
  const pokemonName = pokemonSelected ? pokemonSelected.name : "";
  const PokemonDetailsFooterButtons = generateActionButtons({
    language,
    handleBackToPokemonList,
    lang,
    changeLanguage,
  });

  return (
    <PokemonDetailsContainer>
      <PokemonDetailsGrid>
        <HeaderButtonsContainer>
          {modeButtons.map((button, index: number) => (
            <Button key={index} {...button} />
          ))}
        </HeaderButtonsContainer>
        <PokemonDetailLayoutTable />
        <SimpleFlexTable config={configMode} />
        <FooterButtonsContainer>
          {PokemonDetailsFooterButtons.map((button, index: number) => (
            <Button key={index} {...button} />
          ))}
        </FooterButtonsContainer>
      </PokemonDetailsGrid>
      <PokemonImageWrapper>
        <PokemonImageHeader>
          {capitalizeStrings(pokemonName)}
        </PokemonImageHeader>
        <img src={pokemonImage} alt="" />
      </PokemonImageWrapper>
    </PokemonDetailsContainer>
  );
};

export default PokemonDetailsContent;
