import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'
import * as snippet from '@segment/snippet';

const { ANALYTICS_WRITE_KEY, NODE_ENV } = process.env;

export default class MyDocument extends Document {

  renderSegmentSnippet() {
    const config = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true
    }

    if (NODE_ENV === 'development') {
      return snippet.max(config)
    }

    return snippet.min(config)
  }

  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <script dangerouslySetInnerHTML={{__html: this.renderSegmentSnippet()}}></script>
            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/favicon-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
