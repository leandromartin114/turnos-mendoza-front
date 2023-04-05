import { Title, SubTitle, Body } from '@/ui/Typography'
import { MainButton, SecondaryButton } from '@/ui/Buttons'

export const MainSection = () => {
    return (
        <section className='h-screen grid content-center justify-center gap-16 p-2'>
            <div className='grid content-center gap-4 max-w-md'>
                <Title color='text-orange-500'>
                    ¡Bienvenido a la web de turnos!
                </Title>
                <SubTitle color='text-orange-300'>
                    Inicia sesión con tu correo electrónico o regístrate si aún
                    no lo has hecho.
                </SubTitle>
            </div>
            <div className='grid content-center gap-2 max-w-md'>
                <Body color='text-black'>Ya tengo usuario</Body>
                <MainButton>Ingresar</MainButton>
                <Body color='text-black'>No tengo usuario en la web</Body>
                <SecondaryButton>Registrarse</SecondaryButton>
            </div>
        </section>
    )
}
