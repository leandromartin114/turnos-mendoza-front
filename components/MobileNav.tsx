import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HeaderContext } from '@/context/HeaderContext'
import { CloseWindow } from '@/ui/Icons'
import { useAppSelector } from '@/hooks/redux-toolkit'
import { RootState } from '@/store'
import { User } from '@/ui/Typography'
import { CloseSessionButton } from '@/ui/Buttons'
import { getSavedToken } from '@/lib/api'

export const MobileNav = () => {
    const { open, handleToggle, logout } = useContext(HeaderContext)
    const { email } = useAppSelector((state: RootState) => state.userEmail)
    const router = useRouter()
    const token = getSavedToken()
    const [profileLink, setProfileLink] = useState('/login')
    const [appointmentLink, setAppointmentLink] = useState('/login')
    const [loginLink, setLoginLink] = useState('/login')
    const [displayUser, setDisplayUser] = useState('hidden')

    const handleSession = () => {
        logout()
        handleToggle()
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
            {open && (
                <nav className='bg-orange-500 h-screen w-full absolute z-10 top-0 left-0 flex flex-col gap-20 p-2'>
                    <div className='self-end'>
                        <CloseWindow onClick={handleToggle}></CloseWindow>
                    </div>
                    <ul className='flex flex-col justify-center items-center self-center place-self-center gap-4 text-white font-bold text-2xl'>
                        <li>
                            <a href={profileLink}>Mi perfil</a>
                        </li>
                        <li>
                            <a href={appointmentLink}>Elegir turno</a>
                        </li>
                        <li>
                            <a href={loginLink}>Ingresar</a>
                        </li>
                        <li>
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
            )}
        </>
    )
}
