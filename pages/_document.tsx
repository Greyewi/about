import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
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
