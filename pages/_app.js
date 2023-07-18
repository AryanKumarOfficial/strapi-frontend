import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = React.useState(0)
  const router = useRouter()
  React.useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

  }, [router])
  return <>
    <Head>
      <link rel="shortcut icon" href="https://www.svgrepo.com/show/327408/logo-vercel.svg" type="image/x-icon" />
    </Head>
    <LoadingBar
      color='red'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <Component {...pageProps} />
  </>
}
