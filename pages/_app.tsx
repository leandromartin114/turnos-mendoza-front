import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderContextProvider from '@/context/HeaderContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeaderContextProvider>
                <Component {...pageProps} />
            </HeaderContextProvider>
        </>
    )
}
