import React from "react";
import CharacterList from "../Components/CharacterList/CharacterList.component";
import LanguageProvider from "../HOC/LangProvider/LangProvider.hoc";
import "../Styles/Base.styles.css";

const App = () => {
  return (
    <LanguageProvider>
      <CharacterList />
    </LanguageProvider>
  );
};

export default App;
