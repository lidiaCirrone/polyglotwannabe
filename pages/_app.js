// redux
import { Provider } from 'react-redux'
import { store } from '@/store'

// styles
import '@/styles/globals.css'
import { raleway } from '@/styles/font'

export default function App({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <main className={raleway.className}>
            <Component  {...pageProps} />
         </main>
      </Provider>
   )
}
