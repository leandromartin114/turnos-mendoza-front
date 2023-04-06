import { LoginForm } from '@/components/LoginForm'
import { Title } from '@/ui/Typography'

export const LoginPage = () => {
    return (
        <main className='h-screen grid content-center justify-center gap-16 p-4'>
            <div className='grid content-center justify-center gap-16 max-w-md'>
                <Title color='text-orange-400'>
                    Inicia sesión con tu correo electrónico
                </Title>
                <LoginForm></LoginForm>
            </div>
        </main>
    )
}
