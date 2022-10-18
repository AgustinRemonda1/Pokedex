import React from "react";
import type { AppProps } from "next/app";
import LanguageProvider from "components/LangProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
