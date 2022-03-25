import React, { FC } from "react";
import Button, { ButtonProps } from "../Shared/Button";
import SimpleFlexTable, {
  FlexTableConfigInterface,
} from "../Shared/SimpleFlexTable";
import {
  PokemonDetailsGrid,
  PokemonDetailLayoutTable,
  HeaderButtonsContainer,
  FooterButtonsContainer,
} from "./PokemonDetailsContent.styled";

interface PokemonDetailsContentProps {
  pokemonDetailsFooterButtons: ButtonProps[];
  modeButtons: ButtonProps[];
  configMode: FlexTableConfigInterface[];
}

const PokemonDetailsContent: FC<PokemonDetailsContentProps> = ({
  modeButtons,
  pokemonDetailsFooterButtons,
  configMode,
}) => {
  return (
    <PokemonDetailsGrid>
      <HeaderButtonsContainer>
        {modeButtons.map((button, index: number) => (
          <Button key={index} {...button} />
        ))}
      </HeaderButtonsContainer>
      <PokemonDetailLayoutTable />
      <SimpleFlexTable config={configMode} />
      <FooterButtonsContainer>
        {pokemonDetailsFooterButtons.map((button, index: number) => (
          <Button key={index} {...button} type="small-normal-button" />
        ))}
      </FooterButtonsContainer>
    </PokemonDetailsGrid>
  );
};

export default PokemonDetailsContent;
