import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSavedToken } from '@/lib/api'
import { LoginForm } from '@/components/LoginForm'
import { Title } from '@/ui/Typography'

export const LoginPage = () => {
    const token = getSavedToken()
    const router = useRouter()

    useEffect(() => {
        if (token) {
            router.push('/profile')
        }
    }, [token])

    return (
        <main className='h-screen grid content-center justify-items-center gap-10 p-2'>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-md xl:max-w-lg'>
                <Title color='text-orange-400'>
                    Inicia sesión con tu correo electrónico
                </Title>
            </div>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-sm xl:max-w-md'>
                <LoginForm />
            </div>
        </main>
    )
}
