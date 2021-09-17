import React from "react";
import PokemonList from "../Pages/PokemonList/PokemonList";
import LanguageProvider from "../HOC/LangProvider/LangProvider.hoc";
import "../Styles/Base.styles.css";
import { PokemonContext } from "../Core/Contexts/Pokemon.context";
import PokemonDetails from "../Pages/PokemonDetails/PokemonDetails";
import PokemonProvider from "../HOC/PokemonProvider/PokemonProvider.hoc";

const App = () => {
  return (
    <LanguageProvider>
      <PokemonProvider>
        <PokemonContext.Consumer>
          {({ pokemon }) => (pokemon ? <PokemonDetails /> : <PokemonList />)}
        </PokemonContext.Consumer>
      </PokemonProvider>
    </LanguageProvider>
  );
};

export default App;
