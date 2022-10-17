import React from "react";
import { PokemonFooter } from "./Footer.styled";
import LangIcon from "assets/Icons/translate.svg";
import Button from "components/Shared/Button";
import useLanguage from "core/Hooks/useLanguage";

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
