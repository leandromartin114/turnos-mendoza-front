import { useEffect, useState } from 'react'
import { Title } from '@/ui/Typography'
import { getNext2Months, useGetAppointments } from '@/hooks'

export const AppointmentsPage = () => {
    const data = useGetAppointments()
    const days = getNext2Months()
    const [appos, setAppos] = useState<any>([])

    useEffect(() => {
        const daysIncluded: any = []
        days.map((d: any) => {
            if (data[d]) {
                const appo = {
                    date: d,
                    appointments: data[d].appointments,
                }
                daysIncluded.push(appo)
            }
        })
        setAppos(daysIncluded)
    }, [data])

    return (
        <main className='h-screen grid content-center justify-center gap-16 p-4'>
            <div className='grid content-center justify-center gap-16 max-w-md'>
                <Title color='text-orange-400'>
                    Selecciona el día de tu turno:
                </Title>
                <div>{JSON.stringify(appos)}</div>
            </div>
        </main>
    )
}
