import React, { FC, useState, useEffect, ReactNode } from "react";
import { LanguageContext } from "../../Core/Contexts/Language.context";
import { language, languageOptions } from "../../Config/Lang/Lang.language";
import { getLocalValue, setLocalValue } from "../../Utils/LocalStorage.utils";

interface LangProviderInterface {
  children: ReactNode;
}

const LanguageProvider: FC<LangProviderInterface> = ({ children }) => {
  const { ES } = language;
  const [languageProvider, setLanguageProvider] = useState(ES);
  const [lang, setLang] = useState("");

  useEffect(() => {
    const localLang = getLocalValue("lang");

    languageOptions.map(
      (langOption: any) =>
        langOption.lang === localLang && setLanguageProvider(langOption.value)
    );

    localLang && setLang(localLang);
  }, []);

  useEffect(() => {
    lang && setLocalValue("lang", lang);
  }, [lang]);

  const changeLanguage = (): void => {
    const languageToChange = languageOptions.find(
      (langOption) => langOption.lang !== lang
    );

    if (languageToChange) {
      setLang(languageToChange.lang);
      setLanguageProvider(languageToChange.value);
    }
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
