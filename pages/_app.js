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
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />;
      </>
    );
  }
}
