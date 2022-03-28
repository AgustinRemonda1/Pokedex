import React from "react";
import Listing from "../Pages/Pokemon/Listing";
import Details from "../Pages/Pokemon/Details";
import LanguageProvider from "../HOC/LangProvider";
import "../Assets/Styles/Base.styles.css";
import { PokemonContext } from "../Core/Contexts/Pokemon.context";
import PokemonProvider from "../HOC/PokemonProvider";

const App = () => {
  return (
    <LanguageProvider>
      <PokemonProvider>
        <PokemonContext.Consumer>
          {({ pokemon }) => (pokemon ? <Details /> : <Listing />)}
        </PokemonContext.Consumer>
      </PokemonProvider>
    </LanguageProvider>
  );
};

export default App;
