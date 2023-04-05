import { Title, SubTitle } from '@/ui/Typography'
import { DarkButton } from '@/ui/Buttons'

export const ProfileSection = () => {
    return (
        <section className='h-screen grid content-center justify-center gap-16 p-2 bg-yellow-300'>
            <div className='grid content-center gap-4 max-w-md'>
                <Title color='text-black'>Mi perfil</Title>
                <SubTitle color='text-orange-500'>
                    Podrás ver tu turno, cancelarlo y administrar toda tu
                    información desde esta sección.
                </SubTitle>
            </div>
            <div className='grid content-center gap-2 max-w-md'>
                <DarkButton>Registrarse</DarkButton>
            </div>
        </section>
    )
}
