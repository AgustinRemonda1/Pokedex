import React, { FC } from "react";
import Button, { ButtonProps } from "../../Shared/Button";
import SimpleFlexTable, {
  FlexTableConfigInterface,
} from "../../Shared/SimpleFlexTable";
import {
  PokemonDetailsGrid,
  PokemonDetailLayoutTable,
  HeaderButtonsContainer,
  FooterButtonsContainer,
} from "./DetailsContent.styled";

interface DetailsContentProps {
  pokemonDetailsFooterButtons: ButtonProps[];
  modeButtons: ButtonProps[];
  configMode: FlexTableConfigInterface[];
}

const DetailsContent: FC<DetailsContentProps> = ({
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

export default DetailsContent;
