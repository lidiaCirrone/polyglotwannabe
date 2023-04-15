import localFont from 'next/font/local'
import '@/styles/globals.css'

const raleway = localFont({ src: '../fonts/Raleway-VariableFont_wght.ttf' })

export default function App({ Component, pageProps }) {
   return (
      <main className={raleway.className}>
         <Component  {...pageProps} />
      </main>
   )
}
