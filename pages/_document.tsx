import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/iconGreyewi.png" />
          <style>{`
            @font-face {
              font-family: 'ModeSeven';
              src: url('/fonts/Modeseven.ttf') format('truetype');
              font-style: normal;
              font-display: auto;
            }
            @font-face {
              font-family: 'Legend';
              src: url('/fonts/SuperLegend.ttf') format('truetype');
              font-style: normal;
              font-display: auto;
            }
            @font-face {
              font-family: 'PressStart';
              src: url('/fonts/PressStart.ttf') format('truetype');
              font-style: normal;
              font-display: auto;
            }
            @font-face {
              font-family: 'RobotoSlab';
              src: url('/fonts/RobotoSlab.ttf') format('truetype');
              font-style: normal;
              font-display: auto;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    )
  }
}
