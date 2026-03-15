import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { GlobalStyles, Layout } from '../src/styles'
import Header from '../src/Components/Header'
import '../styles/globals.css'

const modeSeven = localFont({
  src: '../public/fonts/Modeseven.ttf',
  variable: '--font-mode-seven',
  display: 'block',
})

const legendFont = localFont({
  src: '../public/fonts/SuperLegend.ttf',
  variable: '--font-legend',
  display: 'block',
})

const robotoSlab = localFont({
  src: '../public/fonts/RobotoSlab.ttf',
  variable: '--font-roboto-slab',
  display: 'block',
})

const pressStart = localFont({
  src: '../public/fonts/PressStart.ttf',
  variable: '--font-press-start',
  display: 'block',
})

const fontVars = [modeSeven.variable, legendFont.variable, robotoSlab.variable, pressStart.variable].join(' ')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`App-header ${fontVars}`}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}
