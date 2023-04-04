import { useContext } from 'react'
import { HeaderContext } from '@/context/HeaderContext'
import { CloseWindow } from '@/ui/Icons'
export const MobileNav = () => {
    const { open, handleToggle } = useContext(HeaderContext)
    return (
        <>
            {open && (
                <nav className='bg-orange-500 h-screen w-full absolute z-10 top-0 left-0 flex flex-col gap-36 p-2'>
                    <div className='self-end'>
                        <CloseWindow onClick={handleToggle}></CloseWindow>
                    </div>
                    <ul className='flex flex-col justify-center items-center self-center place-self-center gap-4 text-white font-bold text-2xl'>
                        <li>Mi perfil</li>
                        <li>Elegir turno</li>
                        <li>Ingresar</li>
                        <li>Registrarse</li>
                    </ul>
                </nav>
            )}
        </>
    )
}
