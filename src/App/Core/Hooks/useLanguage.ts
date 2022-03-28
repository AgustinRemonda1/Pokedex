import { useContext } from "react";
import { LanguageContext } from "../Contexts/Language.context";

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
