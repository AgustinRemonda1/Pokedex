import React, { FC } from "react";
import Button, { ButtonProps } from "../../../Shared/Button";
import SimpleFlexTable, {
  FlexTableConfigInterface,
} from "../../../Shared/SimpleFlexTable";
import {
  PokemonDetailsGrid,
  PokemonDetailLayoutTable,
  HeaderButtonsContainer,
  FooterButtonsContainer,
} from "./Content.styled";

interface ContentProps {
  pokemonDetailsFooterButtons: ButtonProps[];
  modeButtons: ButtonProps[];
  configMode: FlexTableConfigInterface[];
}

const Content: FC<ContentProps> = ({
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

export default Content;
