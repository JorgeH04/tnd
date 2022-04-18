import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://omoxqslnldmv.usemoralis.com:2053/server'
      appId='udMlwVtDbg4IjT3uze0pGD7biWrBshNdxjYnxKBQ'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp