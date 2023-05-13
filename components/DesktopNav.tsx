import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/hooks/redux-toolkit'
import { HeaderContext } from '@/context/HeaderContext'
import { RootState } from '@/store'
import { User } from '@/ui/Typography'
import { CloseSessionButton } from '@/ui/Buttons'
import { getSavedToken } from '@/lib/api'

export const DesktopNav = () => {
    const { email } = useAppSelector((state: RootState) => state.userEmail)
    const { logout } = useContext(HeaderContext)
    const router = useRouter()
    const token = getSavedToken()
    const [profileLink, setProfileLink] = useState('/login')
    const [appointmentLink, setAppointmentLink] = useState('/login')
    const [loginLink, setLoginLink] = useState('/login')
    const [displayUser, setDisplayUser] = useState('hidden')

    const handleSession = () => {
        logout()
        router.push('/')
    }

    useEffect(() => {
        if (token) {
            setProfileLink('/profile')
            setAppointmentLink('/appointment')
            setLoginLink('/profile')
            setDisplayUser('flex')
        } else {
            setProfileLink('/login')
            setAppointmentLink('/login')
            setLoginLink('/login')
            setDisplayUser('hidden')
        }
    }, [token])

    return (
        <>
            <nav className='hidden lg:flex p-2 gap-8'>
                <ul className='flex justify-around items-center gap-8 font-semibold text-xl text-orange-400'>
                    <li className='hover:text-orange-300'>
                        <a href={profileLink}>Mi perfil</a>
                    </li>
                    <li className='hover:text-orange-300'>
                        <a href={appointmentLink}>Elegir turno</a>
                    </li>
                    <li className='text-orange-600 hover:text-orange-400'>
                        <a href={loginLink}>Ingresar</a>
                    </li>
                    <li className='text-orange-600 p-2 rounded-lg bg-yellow-300 hover:bg-yellow-400'>
                        <a href='/signup'>Registrarse</a>
                    </li>
                </ul>
                <div className={'flex-col items-center ' + displayUser}>
                    <User color='text-black'>{email}</User>
                    <CloseSessionButton onClick={handleSession}>
                        cerrar sesión
                    </CloseSessionButton>
                </div>
            </nav>
        </>
    )
}
