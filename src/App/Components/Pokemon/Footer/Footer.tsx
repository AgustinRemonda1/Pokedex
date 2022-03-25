import React from "react";
import { PokemonFooter } from "./Footer.styled";
import LangIcon from "../../Assets/Icons/translate.svg";
import Button from "../../Shared/Button";
import useLanguage from "../../../Core/Hooks/useLanguage";

const Footer = () => {
  const { language, changeLanguage, lang } = useLanguage();
  const langOption = lang === language.es ? language.en : language.es;

  return (
    <PokemonFooter>
      <Button
        icon={LangIcon}
        text={langOption}
        action={() => changeLanguage()}
        type="small-normal-button"
      />
    </PokemonFooter>
  );
};

export default Footer;
