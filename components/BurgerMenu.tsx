import { useContext } from 'react'
import { HeaderContext } from '@/context/HeaderContext'
import { Menu } from '@/ui/Icons'

export const BurgerMenu = () => {
    const { handleToggle } = useContext(HeaderContext)
    return (
        <div onClick={handleToggle}>
            <Menu></Menu>
        </div>
    )
}
