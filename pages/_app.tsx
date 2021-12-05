import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-full font-roboto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
