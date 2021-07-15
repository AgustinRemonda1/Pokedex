import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../../Config/Lang/Lang.language";
import Button from "../SharedComponents/Button/Button.component";
import SimpleFlexTable from "../SharedComponents/SimpleFlexTable/SimpleFlexTable.component";
import {
  generateDetailsConfig,
  generateStatsConfig,
  generateAbilitiesConfig,
  modes,
  generateButtonModes,
} from "./PokemonDetails.config";
import {
  PokemonDetailsContainer,
  PokemonDetailsContent,
  PokemonImageWrapper,
  PokemonImageHeader,
  PokemonDetailLayoutTable,
  ButtonsContainer,
} from "./PokemonDetails.styles";

interface PokemonDetailsProps {
  pokemonSelected: any;
  setPokemonSelected: (pokemon: any) => void;
}

const PokemonDetails = ({ pokemonSelected }: PokemonDetailsProps) => {
  const { language } = useContext(LanguageContext);
  const [mode, setMode] = useState<string>(modes.details);
  const modeButtons = generateButtonModes({ language, setMode, mode });

  const configMode = useMemo(() => {
    const configParams = {
      language,
      pokemon: pokemonSelected,
    };

    switch (mode) {
      case modes.details:
        return generateDetailsConfig(configParams);
      case modes.stats:
        return generateStatsConfig(configParams);
      case modes.abilities:
        return generateAbilitiesConfig(configParams);
      default:
        return generateDetailsConfig(configParams);
    }
  }, [mode]);

  return (
    <PokemonDetailsContainer>
      <PokemonDetailsContent>
        <ButtonsContainer>
          {modeButtons.map((button, index: number) => (
            <Button key={index} {...button} />
          ))}
        </ButtonsContainer>
        <PokemonDetailLayoutTable />
        <SimpleFlexTable config={configMode} />
      </PokemonDetailsContent>
      <PokemonImageWrapper>
        <PokemonImageHeader>{pokemonSelected.name}</PokemonImageHeader>
        <img src={pokemonSelected.sprites.other.dream_world.front_default} />
      </PokemonImageWrapper>
    </PokemonDetailsContainer>
  );
};

export default PokemonDetails;
