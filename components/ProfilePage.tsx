import { Title } from '@/ui/Typography'
import { UpdateForm } from './UpdateForm'

export const ProfilePage = () => {
    return (
        <main className='h-screen grid content-center justify-center gap-16 p-2'>
            <div className='max-w-md sm:w-[448px] grid content-center justify-center gap-16'>
                <Title color='text-orange-400'>Mis datos</Title>
            </div>
            <UpdateForm />
        </main>
    )
}
