import { useState } from "react";
import Head from "next/head";
import "../sass/styles.scss";

export default function App({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>Abraham Home Care</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/atg0jpe.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
