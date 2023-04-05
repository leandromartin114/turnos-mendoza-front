import { Body } from '@/ui/Typography'

export const Footer = () => {
    return (
        <footer className='bg-orange-500 w-full absolute flex flex-col gap-8 px-2 py-8'>
            <ul className='flex flex-col justify-center items-center self-center place-self-center gap-4 text-white font-semibold text-xl'>
                <li>
                    <a href='#'>Mi perfil</a>
                </li>
                <li>
                    <a href='#'>Elegir turno</a>
                </li>
                <li>
                    <a href='#'>Ingresar</a>
                </li>
                <li>
                    <a href='#'>Registrarse</a>
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
