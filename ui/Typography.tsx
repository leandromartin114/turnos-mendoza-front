import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    color: string
}

export const Title = ({ children, color }: Props) => {
    return (
        <h1 className={'text-4xl font-bold font-ibm text-center ' + color}>
            {children}
        </h1>
    )
}

export const SubTitle = ({ children, color }: Props) => {
    return (
        <h2 className={'text-2xl font-bold font-ibm text-center ' + color}>
            {children}
        </h2>
    )
}

export const Body = ({ children, color }: Props) => {
    return <p className={'text-sm font-normal ' + color}>{children}</p>
}
