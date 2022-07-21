import ThemeProvider from "contexts/ThemeProvider";
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
      </ThemeProvider>
    </>
  );
};

export default App;
