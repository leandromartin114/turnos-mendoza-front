import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { MainSection } from '@/components/MainSection'
import { ProfileSection } from '@/components/PofileSection'

export default function Home() {
    return (
        <>
            <Head>
                <title>Turnos Mendoza</title>
                <meta name='description' content='Appointments web' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <MainSection />
                <ProfileSection />
            </Layout>
        </>
    )
}
