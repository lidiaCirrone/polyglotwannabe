// redux
import { Provider } from 'react-redux'
import { store } from '@/store'

// styles
import '@/styles/globals.css'
import { nunito } from '@/styles/font'

export default function App({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <div className={`${nunito.className} relative`}>
            <Component  {...pageProps} />
         </div>
      </Provider>
   )
}
