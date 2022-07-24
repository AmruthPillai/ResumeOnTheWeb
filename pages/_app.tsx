import ThemeProvider from "contexts/ThemeProvider";
import Navigation from "components/Navigation";
import NoSSR from "components/NoSSR";
import Head from "next/head";
import type { AppProps } from "next/app";

import "animate.css";
import "tippy.js/dist/tippy.css";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Amruth Pillai - Resume on the Web</title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />

        <NoSSR>
          <Navigation />
        </NoSSR>
      </ThemeProvider>
    </>
  );
};

export default App;
