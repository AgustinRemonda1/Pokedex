import React from "react";
import { Footer } from "./PokemonFooter.styled";
import LangIcon from "../../Assets/Icons/translate.svg";
import Button from "../Shared/Button/Button";
import useLanguage from "../../Core/Hooks/useLanguage";

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
