import { Raleway } from 'next/font/google'
import '@/styles/globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
   return (
      <>
         <style jsx global>{`
       html {
         font-family: ${raleway.style.fontFamily};
       }
     `}</style>
         <Component {...pageProps} />
      </>
   )
}
