import { SignupForm } from './SignupForm'
import { Title } from '@/ui/Typography'

export const SignupPage = () => {
    return (
        <main className='h-screen grid content-center justify-items-center gap-10 p-2'>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-md xl:max-w-lg'>
                <Title color='text-orange-400'>
                    Ingresa tus datos para dar de alta un usuario
                </Title>
            </div>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-sm xl:max-w-md'>
                <SignupForm />
            </div>
        </main>
    )
}
