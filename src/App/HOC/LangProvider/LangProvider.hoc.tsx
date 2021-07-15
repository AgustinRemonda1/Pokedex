import React, { useState, useEffect } from "react";
import {
  language,
  LanguageContext,
  //  languageOptions,
} from "../../Config/Lang/Lang.language";
//import { setLocalValue } from "../Utils/LocalStorage.utils";
import LangProviderInterface from "./LangProvider.interfaces";

const LanguageProvider = ({ children }: LangProviderInterface) => {
  const { ES } = language;
  const [languageProvider, setLanguageProvider] = useState(ES);
  const [lang, setLang] = useState("");

  // useEffect(() => {
  //   lang && setLocalValue("lang", lang);

  //   languageOptions.find(
  //     (langOption:any) =>
  //       langOption.lang === langAuth && setLanguageProvider(langOption.value)
  //   );

  //   langAuth && setLang(langAuth);
  // }, [lang, langAuth, languageOptions.length]);

  const changeLanguage = (e: any): void => {
    console.log(e.target.value);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        changeLanguage,
        language: languageProvider,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
