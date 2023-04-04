/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: ReactNode
}

interface contextDefaultValue {
    handleToggle(event: React.MouseEvent): void
    open: boolean
}
export const HeaderContext = createContext<contextDefaultValue>(null!)

const HeaderContextProvider = ({ children }: Props) => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    const value = {
        handleToggle,
        open,
    }

    return (
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
}
export default HeaderContextProvider
