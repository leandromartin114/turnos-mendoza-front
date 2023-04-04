import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    bg: string
    text: string
}

export const MainButton = ({ children, bg, text }: Props) => {
    return (
        <button
            className={
                'w-full p-2 rounded-lg font-bold text-lg ' + bg + ' ' + text
            }
        >
            {children}
        </button>
    )
}
