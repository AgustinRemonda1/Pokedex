import { createContext } from "react";
import { language } from "config/Lang/Lang.language";

interface LanguageInterface {
  [propName: string]: string;
}

interface LanguageContextInterface {
  lang: string;
  changeLanguage: () => void;
  language: LanguageInterface;
}

export const LanguageContext = createContext<LanguageContextInterface>({
  lang: "ES",
  changeLanguage: (): void => {},
  language: language.ES,
});
