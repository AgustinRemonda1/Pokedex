import React, { useMemo } from "react";
import PokemonDetailsContent from "../../Components/PokemonDetailsContent";
import PokemonImageDetails from "../../Components/PokemonImageDetails";
import usePokemonDetails from "../../Core/Hooks/PokemonDetails/usePokemoDetails.hook";
import useLanguage from "../../Core/Hooks/Shared/useLanguage.hook";
import {
  modes,
  generateButtonModes,
  generateActionButtons,
} from "./PokemonDetails.config";
import { PokemonDetailsContainer } from "./PokemonDetails.styled";
import { switchConfigMode } from "./PokemonDetails.utils";

const PokemonDetails = () => {
  const { language, changeLanguage, lang } = useLanguage();
  const { state, actions } = usePokemonDetails();
  const { mode, pokemon } = state;
  const { onChangeMode, onBackToPokemonDetails } = actions;
  const modeButtons = generateButtonModes({ language, onChangeMode, mode });
  const pokemonDetailsFooterButtons = generateActionButtons({
    language,
    onBackToPokemonDetails,
    lang,
    changeLanguage,
  });

  const configMode = useMemo(() => {
    const configParams = {
      language,
      pokemon,
      lang,
    };

    return switchConfigMode({ mode, modes, configParams });
  }, [mode, pokemon, language, lang]);

  return (
    <PokemonDetailsContainer>
      <PokemonDetailsContent
        modeButtons={modeButtons}
        pokemonDetailsFooterButtons={pokemonDetailsFooterButtons}
        configMode={configMode}
      />
      <PokemonImageDetails pokemon={pokemon} />
    </PokemonDetailsContainer>
  );
};

export default PokemonDetails;
