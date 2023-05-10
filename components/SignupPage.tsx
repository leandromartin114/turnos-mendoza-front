import { SignupForm } from './SignupForm'
import { Title } from '@/ui/Typography'

export const SignupPage = () => {
    return (
        <main className='h-screen grid content-center justify-center gap-16 p-2'>
            <div className='grid content-center justify-center gap-16 max-w-md'>
                <Title color='text-orange-400'>
                    Ingresa tus datos para dar de alta un usuario
                </Title>
                <SignupForm />
            </div>
        </main>
    )
}
