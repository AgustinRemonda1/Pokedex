import React from "react";
import { Footer } from "./PokemonFooter.styled";
import LangIcon from "src/App/Assets/Icons/translate.svg";
import Button from "../Shared/Button/Button";
import useLanguage from "src/App/Core/Hooks/Shared/useLanguage.hook";

const PokemonFooter = () => {
  const { language, changeLanguage, lang } = useLanguage();
  const langOption = lang === language.es ? language.en : language.es;

  return (
    <Footer>
      <Button
        icon={LangIcon}
        text={langOption}
        action={() => changeLanguage()}
        type="small-normal-button"
      />
    </Footer>
  );
};

export default PokemonFooter;
