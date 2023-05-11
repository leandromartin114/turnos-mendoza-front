import { useRouter } from 'next/router'
import { Title, SubTitle } from '@/ui/Typography'
import { DarkButton } from '@/ui/Buttons'
import { getSavedToken } from '@/lib/api'

export const ProfileSection = () => {
    const router = useRouter()
    const token = getSavedToken()

    const handlerClick = () => {
        token ? router.push('/profile') : router.push('/login')
    }

    return (
        <section className='h-screen grid content-center justify-items-center gap-16 p-2 bg-yellow-300'>
            <div className='grid content-center gap-4 max-w-md xl:max-w-xl'>
                <Title color='text-black'>Mi perfil</Title>
                <SubTitle color='text-orange-500'>
                    Podrás ver tu turno, cancelarlo y administrar toda tu
                    información desde esta sección.
                </SubTitle>
            </div>
            <div className='grid content-center gap-2 w-72 xl:w-96'>
                <DarkButton onClick={handlerClick}>Ingresar</DarkButton>
            </div>
        </section>
    )
}
