import { IsoLogo } from '@/ui/Icons'
import { BurgerMenu } from './BurgerMenu'
import { MobileNav } from './MobileNav'

export const Header = () => {
    return (
        <header className='h-16 w-full p-2 border-b-orange-500 border-solid border-2 flex items-center justify-between'>
            <IsoLogo></IsoLogo>
            <BurgerMenu></BurgerMenu>
            <MobileNav></MobileNav>
        </header>
    )
}
