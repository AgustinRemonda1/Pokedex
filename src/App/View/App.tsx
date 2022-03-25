import React from "react";
import PokemonList from "../Pages/PokemonList";
import LanguageProvider from "../HOC/LangProvider";
import "../Styles/Base.styles.css";
import { PokemonContext } from "../Core/Contexts/Pokemon.context";
import PokemonDetails from "../Pages/PokemonDetails";
import PokemonProvider from "../HOC/PokemonProvider";

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
