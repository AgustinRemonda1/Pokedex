import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../../Config/Lang/Lang.language";
import { modes, generateButtonModes } from "./PokemonDetails.config";
import PokemonDetailsContent from "./PokemonDetails.content";
import { PokemonDetailsProps } from "./PokemonDetails.interfaces";
import { switchConfigMode } from "./PokemonDetails.utils";

const PokemonDetails = ({
  pokemonSelected,
  handleBackToPokemonList,
}: PokemonDetailsProps) => {
  const { language, changeLanguage, lang } = useContext(LanguageContext);
  const [mode, setMode] = useState<string>(modes.details);
  const modeButtons = generateButtonModes({ language, setMode, mode });

  const configMode = useMemo(() => {
    const configParams = {
      language,
      pokemon: pokemonSelected,
    };

    return switchConfigMode({ mode, modes, configParams });
  }, [mode, pokemonSelected, language]);

  return (
    <PokemonDetailsContent
      pokemonSelected={pokemonSelected}
      handleBackToPokemonList={handleBackToPokemonList}
      modeButtons={modeButtons}
      configMode={configMode}
      changeLanguage={changeLanguage}
      lang={lang}
      language={language}
    />
  );
};

export default PokemonDetails;
