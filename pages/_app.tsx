import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderContextProvider from '@/context/HeaderContext'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
    const persistor = persistStore(store)
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HeaderContextProvider>
                        <Component {...pageProps} />
                    </HeaderContextProvider>
                </PersistGate>
            </Provider>
        </>
    )
}
