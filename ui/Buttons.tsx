import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

export const MainButton = ({ children }: Props) => {
    return (
        <button
            className={
                'w-full p-2 rounded-lg font-bold text-lg bg-yellow-300 text-orange-500 '
            }
        >
            {children}
        </button>
    )
}

export const SecondaryButton = ({ children }: Props) => {
    return (
        <button
            className={
                'w-full p-2 rounded-lg font-bold text-lg bg-orange-500 text-yellow-300 '
            }
        >
            {children}
        </button>
    )
}

export const DarkButton = ({ children }: Props) => {
    return (
        <button
            className={
                'w-full p-2 rounded-lg font-bold text-lg bg-black text-orange-400 '
            }
        >
            {children}
        </button>
    )
}
