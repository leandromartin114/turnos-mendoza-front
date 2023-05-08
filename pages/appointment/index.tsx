import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { AppointmentsPage } from '@/components/AppointmentPage'

export default function Login() {
    return (
        <>
            <Head>
                <title>Appointments</title>
                <meta name='description' content='Appointments web' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <AppointmentsPage />
            </Layout>
        </>
    )
}
