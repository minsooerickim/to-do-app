import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RelayEnvironmentProvider } from 'react-relay'
import relayEnv from './api/relayEnv'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>to-do-app</title>
      </Head>
      <RelayEnvironmentProvider environment={relayEnv}>
        <Component {...pageProps} />
      </RelayEnvironmentProvider>
    </>
  )
}

export default MyApp
