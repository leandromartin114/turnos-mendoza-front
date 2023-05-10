import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { SignupPage } from '@/components/SignupPage'

export default function Signup() {
    return (
        <>
            <Head>
                <title>Signup</title>
                <meta name='description' content='Appointments web' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <SignupPage />
            </Layout>
        </>
    )
}
