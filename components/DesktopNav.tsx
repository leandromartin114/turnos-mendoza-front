import { useContext } from 'react'
import { useAppSelector } from '@/hooks/redux-toolkit'
import { HeaderContext } from '@/context/HeaderContext'
import { RootState } from '@/store'
import { User } from '@/ui/Typography'
import { CloseSessionButton } from '@/ui/Buttons'

export const DesktopNav = () => {
    const { email } = useAppSelector((state: RootState) => state.userEmail)
    const { token, logout } = useContext(HeaderContext)

    return (
        <>
            <nav className='hidden lg:flex p-2 gap-8'>
                <ul className='flex justify-around items-center gap-8 font-semibold text-xl text-orange-400'>
                    <li className='hover:text-orange-300'>
                        <a href={token ? '/profile' : '/login'}>Mi perfil</a>
                    </li>
                    <li className='hover:text-orange-300'>
                        <a href={token ? '/appointment' : '/login'}>
                            Elegir turno
                        </a>
                    </li>
                    <li className='text-orange-600 hover:text-orange-400'>
                        <a href={token ? '/profile' : '/login'}>Ingresar</a>
                    </li>
                    <li className='text-orange-600 p-2 rounded-lg bg-yellow-300 hover:bg-yellow-400'>
                        <a href='/signup'>Registrarse</a>
                    </li>
                </ul>
                {token && (
                    <div className='flex flex-col items-center'>
                        <User color='text-black'>{email}</User>
                        <CloseSessionButton onClick={logout}>
                            cerrar sesión
                        </CloseSessionButton>
                    </div>
                )}
            </nav>
        </>
    )
}
