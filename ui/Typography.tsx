import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    color: string
}

export const Title = ({ children, color }: Props) => {
    return (
        <h1
            className={
                'text-4xl md:text-5xl xl:text-6xl font-bold font-ibm text-center ' +
                color
            }
        >
            {children}
        </h1>
    )
}

export const SubTitle = ({ children, color }: Props) => {
    return (
        <h2
            className={
                'text-2xl md:text-3xl xl:text-4xl font-bold font-ibm text-center ' +
                color
            }
        >
            {children}
        </h2>
    )
}

export const Body = ({ children, color }: Props) => {
    return (
        <p className={'text-sm xl:text-base font-normal ' + color}>
            {children}
        </p>
    )
}

export const Label = ({ children, color }: Props) => {
    return (
        <p className={'text-sm xl:text-base font-semibold ' + color}>
            {children}
        </p>
    )
}

export const User = ({ children, color }: Props) => {
    return (
        <p className={'text-sm xl:text-base font-semibold ' + color}>
            {children}
        </p>
    )
}
