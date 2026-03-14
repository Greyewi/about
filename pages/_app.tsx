import type { AppProps } from 'next/app'
import { GlobalStyles, Layout } from '../src/styles'
import Header from '../src/Components/Header'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className="App-header">
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}
