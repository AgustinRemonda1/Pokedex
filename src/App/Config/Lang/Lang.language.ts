import EN from "./En.language";
import ES from "./Es.language";

export interface LanguageInterface {
  [key: string]: string;
}

export const language = { EN: EN, ES: ES };

export const languageOptions = [
  { lang: "ES", value: ES },
  { lang: "EN", value: EN },
];
