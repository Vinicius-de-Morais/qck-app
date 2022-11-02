import '../styles/globals.css'

// coloca um estilo padrao em todas as pgs
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
