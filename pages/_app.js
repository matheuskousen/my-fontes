import Head from "next/head";
import App from "next/app";
import { GlobalStyle } from "../style/style";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Favorite Typographies</title>

          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic"
            rel="stylesheet"
          />
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
        <Component {...pageProps} />
      </>
    );
  }
}
