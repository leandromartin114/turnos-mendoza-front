import { useState, useEffect } from 'react'
import { getSavedToken } from '@/lib/api'
import { Body } from '@/ui/Typography'

export const Footer = () => {
    const token = getSavedToken()
    const [profileLink, setProfileLink] = useState('/login')
    const [appointmentLink, setAppointmentLink] = useState('/login')
    const [loginLink, setLoginLink] = useState('/login')

    useEffect(() => {
        if (token) {
            setProfileLink('/profile')
            setAppointmentLink('/appointment')
            setLoginLink('/profile')
        } else {
            setProfileLink('/login')
            setAppointmentLink('/login')
            setLoginLink('/login')
        }
    }, [token])

    return (
        <footer className='bg-orange-500 w-full absolute flex flex-col gap-8 px-2 py-8'>
            <ul className='flex flex-col justify-center items-center self-center place-self-center gap-4 text-white font-semibold text-xl'>
                <li className='hover:text-gray-200'>
                    <a href={profileLink}>Mi perfil</a>
                </li>
                <li className='hover:text-gray-200'>
                    <a href={appointmentLink}>Elegir turno</a>
                </li>
                <li className='hover:text-gray-200'>
                    <a href={loginLink}>Ingresar</a>
                </li>
                <li className='hover:text-gray-200'>
                    <a href='/signup'>Registrarse</a>
                </li>
            </ul>
            <div className='text-center'>
                <Body color='text-black'>
                    Copyright © 2023 Leandro Roldán. All rights reserved.
                </Body>
            </div>
        </footer>
    )
}
