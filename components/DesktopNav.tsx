import { useAppSelector } from '@/hooks/redux-toolkit'
import { RootState } from '@/store'
import { User } from '@/ui/Typography'
import { CloseSessionButton } from '@/ui/Buttons'
import { getSavedToken, removeToken } from '@/lib/api'
import { useEffect, useState } from 'react'

export const DesktopNav = () => {
    const { email } = useAppSelector((state: RootState) => state.userEmail)
    const token = getSavedToken()
    const [active, setActive] = useState(false)

    const closeSession = () => {
        removeToken()
        setActive(false)
    }

    useEffect(() => {
        if (token) {
            setActive(true)
        }
    }, [token])

    return (
        <>
            <nav className='hidden lg:flex p-2'>
                <ul className='flex justify-around items-center gap-8 font-semibold text-xl text-orange-400'>
                    <li className='hover:text-orange-300'>
                        <a href='/profile'>Mi perfil</a>
                    </li>
                    <li className='hover:text-orange-300'>
                        <a href='/appointment'>Elegir turno</a>
                    </li>
                    <li className='text-orange-600 hover:text-orange-400'>
                        <a href='/login'>Ingresar</a>
                    </li>
                    <li className='text-orange-600 p-2 rounded-lg bg-yellow-300 hover:bg-yellow-400'>
                        <a href='/signup'>Registrarse</a>
                    </li>
                </ul>
                {active && (
                    <div className='flex flex-col items-center gap-2'>
                        <User color='text-black'>{email}</User>
                        <CloseSessionButton onClick={closeSession}>
                            cerrar sesión
                        </CloseSessionButton>
                    </div>
                )}
            </nav>
        </>
    )
}
