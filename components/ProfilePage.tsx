import { getSavedToken } from '@/lib/api'
import { Title } from '@/ui/Typography'
import { UpdateForm } from './UpdateForm'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const ProfilePage = () => {
    const token = getSavedToken()
    const router = useRouter()

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token])

    return (
        <main className='h-screen grid content-center justify-center gap-16 p-2'>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-md xl:max-w-lg'>
                <Title color='text-orange-400'>Mis datos</Title>
            </div>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-sm xl:max-w-md'>
                <UpdateForm />
            </div>
        </main>
    )
}
