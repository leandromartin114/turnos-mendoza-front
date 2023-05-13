/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, ReactNode, useState } from 'react'
import { removeToken } from '@/lib/api'

interface Props {
    children?: ReactNode
}

interface contextDefaultValue {
    handleToggle: () => void
    open: boolean
    logout: () => void
}
export const HeaderContext = createContext<contextDefaultValue>(null!)

const HeaderContextProvider = ({ children }: Props) => {
    const [open, setOpen] = useState(false)

    const logout = () => {
        removeToken()
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    const value = {
        handleToggle,
        open,
        logout,
    }

    return (
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
}
export default HeaderContextProvider
