import { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '@/context/HeaderContext'
import { Body } from '@/ui/Typography'

export const Footer = () => {
    const token = useContext(HeaderContext)
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (token) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [token])

    return (
        <footer className='bg-orange-500 w-full absolute flex flex-col gap-8 px-2 py-8'>
            <ul className='flex flex-col justify-center items-center self-center place-self-center gap-4 text-white font-semibold text-xl'>
                <li className='hover:text-gray-200'>
                    <a href={login ? '/profile' : '/login'}>Mi perfil</a>
                </li>
                <li className='hover:text-gray-200'>
                    <a href={login ? '/appointment' : '/login'}>Elegir turno</a>
                </li>
                <li className='hover:text-gray-200'>
                    <a href={login ? '/profile' : '/login'}>Ingresar</a>
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
