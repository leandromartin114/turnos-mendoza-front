import { useRouter } from 'next/router'
import { getSavedToken } from '@/lib/api'
import { Title, SubTitle, Body } from '@/ui/Typography'
import { MainButton, SecondaryButton } from '@/ui/Buttons'

export const MainSection = () => {
    const router = useRouter()
    const token = getSavedToken()

    const handleLogin = () => {
        token ? router.push('/profile') : router.push('/login')
    }

    const handleSignup = () => {
        router.push('/signup')
    }

    return (
        <section className='h-screen grid content-center justify-items-center gap-16 p-2'>
            <div className='grid content-center gap-4 max-w-md xl:max-w-xl'>
                <Title color='text-orange-500'>
                    ¡Bienvenido a la web de turnos!
                </Title>
                <SubTitle color='text-orange-300'>
                    Inicia sesión con tu correo electrónico o regístrate si aún
                    no lo has hecho.
                </SubTitle>
            </div>
            <div className='grid content-center gap-2 w-72 xl:w-96'>
                <Body color='text-black'>Ya tengo usuario</Body>
                <MainButton onClick={handleLogin}>Ingresar</MainButton>
                <Body color='text-black'>No tengo usuario en la web</Body>
                <SecondaryButton onClick={handleSignup}>
                    Registrarse
                </SecondaryButton>
            </div>
        </section>
    )
}
