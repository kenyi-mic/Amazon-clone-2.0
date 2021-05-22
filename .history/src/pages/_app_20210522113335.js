import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Provider as AuthProvider } from 'next/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageprops.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </AuthProvider>
  )
}

export default MyApp
