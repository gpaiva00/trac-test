// collects page's style becoming from server and applies it just before the page be rendered
import 'regenerator-runtime'
import 'regenerator-runtime/runtime.js'
import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="PARABAINS" />
          <meta
            property="og:description"
            content="Parabains"
          />
          {/* <meta property="og:image" content="/ogMinPoker.png" key="ogimage" /> */}

          

          <title>PARABAINS</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
