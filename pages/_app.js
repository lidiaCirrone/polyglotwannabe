// modules
import localFont from 'next/font/local'

// redux
import { Provider } from 'react-redux'
import { store } from '@/store'

// styles
import '@/styles/globals.css'

const raleway = localFont({ src: '../fonts/Raleway-VariableFont_wght.ttf' })

export default function App({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <main className={raleway.className}>
            <Component  {...pageProps} />
         </main>
      </Provider>
   )
}
