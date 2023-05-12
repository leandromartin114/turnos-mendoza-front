/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, ReactNode, useState } from 'react'
import { getSavedToken, removeToken } from '@/lib/api'

interface Props {
    children?: ReactNode
}

interface contextDefaultValue {
    handleToggle(event: React.MouseEvent): void
    open: boolean
    token: string | boolean | null
    logout: () => void
}
export const HeaderContext = createContext<contextDefaultValue>(null!)

const HeaderContextProvider = ({ children }: Props) => {
    const [open, setOpen] = useState(false)
    const [token, setToken] = useState(() => getSavedToken())

    const logout = () => {
        removeToken()
        setToken('')
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    const value = {
        handleToggle,
        open,
        token,
        logout,
    }

    return (
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
}
export default HeaderContextProvider
