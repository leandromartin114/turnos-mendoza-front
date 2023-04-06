import { MouseEventHandler, ReactNode } from 'react'

interface Props {
    children?: ReactNode
    onClick?: MouseEventHandler
    type?: 'button' | 'submit' | 'reset'
}

export const MainButton = ({ children, onClick, type }: Props) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                'w-full p-2 rounded-lg font-bold text-lg bg-yellow-300 text-orange-500 hover:bg-yellow-400'
            }
        >
            {children}
        </button>
    )
}

export const SecondaryButton = ({ children, onClick, type }: Props) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                'w-full p-2 rounded-lg font-bold text-lg bg-orange-500 text-yellow-300 hover:bg-orange-400'
            }
        >
            {children}
        </button>
    )
}

export const DarkButton = ({ children, onClick, type }: Props) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                'w-full p-2 rounded-lg font-bold text-lg bg-black text-orange-400 hover:bg-gray-600 '
            }
        >
            {children}
        </button>
    )
}
