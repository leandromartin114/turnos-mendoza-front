import { useContext } from 'react'
import { HeaderContext } from '@/context/HeaderContext'
import { CloseWindow } from '@/ui/Icons'
import { useAppSelector } from '@/hooks/redux-toolkit'
import { RootState } from '@/store'
import { User } from '@/ui/Typography'
import { CloseSessionButton } from '@/ui/Buttons'

export const MobileNav = () => {
    const { open, handleToggle, token, logout } = useContext(HeaderContext)
    const { email } = useAppSelector((state: RootState) => state.userEmail)

    return (
        <>
            {open && (
                <nav className='bg-orange-500 h-screen w-full absolute z-10 top-0 left-0 flex flex-col gap-20 p-2'>
                    <div className='self-end'>
                        <CloseWindow onClick={handleToggle}></CloseWindow>
                    </div>
                    <ul className='flex flex-col justify-center items-center self-center place-self-center gap-4 text-white font-bold text-2xl'>
                        <li>
                            <a href={token ? '/profile' : '/login'}>
                                Mi perfil
                            </a>
                        </li>
                        <li>
                            <a href={token ? '/appointment' : '/login'}>
                                Elegir turno
                            </a>
                        </li>
                        <li>
                            <a href={token ? '/profile' : '/login'}>Ingresar</a>
                        </li>
                        <li>
                            <a href='/signup'>Registrarse</a>
                        </li>
                    </ul>
                    {token && (
                        <div className='self-center flex flex-col items-center'>
                            <User color='text-black'>{email}</User>
                            <CloseSessionButton onClick={logout}>
                                cerrar sesión
                            </CloseSessionButton>
                        </div>
                    )}
                </nav>
            )}
        </>
    )
}
