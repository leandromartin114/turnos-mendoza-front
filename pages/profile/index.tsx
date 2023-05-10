import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { ProfilePage } from '@/components/ProfilePage'

export default function Login() {
    return (
        <>
            <Head>
                <title>Profile</title>
                <meta name='description' content='Appointments web' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <ProfilePage />
            </Layout>
        </>
    )
}
