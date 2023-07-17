import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="https://www.svgrepo.com/show/327408/logo-vercel.svg" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>
}
