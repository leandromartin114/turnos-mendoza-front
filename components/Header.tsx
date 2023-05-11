import { useRouter } from 'next/router'
import { IsoLogo } from '@/ui/Icons'
import { BurgerMenu } from './BurgerMenu'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'

export const Header = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/')
    }

    return (
        <header className='h-16 w-full p-2 border-b-orange-500 border-solid border-2 flex items-center justify-between fixed z-10 bg-white'>
            <IsoLogo onClick={handleClick} />
            <BurgerMenu />
            <MobileNav />
            <DesktopNav />
        </header>
    )
}
