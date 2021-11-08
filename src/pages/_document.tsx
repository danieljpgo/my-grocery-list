import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* @TODO Voltar aqui e melhorar a experiencia do pwa */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="theme-color" content="#fff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body style={{ WebkitTapHighlightColor: "transparent" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}