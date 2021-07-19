import React from "react";
import PokemonList from "../Components/PokemonList/PokemonList.component";
import LanguageProvider from "../HOC/LangProvider/LangProvider.hoc";
import "../Styles/Base.styles.css";

const App = () => {
  return (
    <LanguageProvider>
      <PokemonList />
    </LanguageProvider>
  );
};

export default App;
