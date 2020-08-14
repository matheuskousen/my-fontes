import Head from "next/head";
import App from "next/app";
import { GlobalStyle } from "../style/style";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>template with-styled-component</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/site.webmanifest" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />;
      </>
    );
  }
}
