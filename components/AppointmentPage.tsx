import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGetAppointments } from '@/hooks'
import { getSavedToken } from '@/lib/api'
import { getNext2Months } from '@/lib/helpers'
import { AppointmentPicker } from './AppointmentPicker'
import { Title, Body } from '@/ui/Typography'

export const AppointmentsPage = () => {
    const data = useGetAppointments()
    const nextSixtyDays = getNext2Months()
    const [fullDays, setFullDays] = useState<any>([])
    const token = getSavedToken()
    const router = useRouter()

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token])

    useEffect(() => {
        const daysWithAppointments: any = []
        nextSixtyDays.map((date: any) => {
            if (data[date]) {
                const appo = {
                    date: date,
                    appointments: data[date].appointments,
                }
                daysWithAppointments.push(appo)
            }
        })

        const daysFullOfAppointments = daysWithAppointments.filter(
            (day: any) => {
                const size = Object.keys(day['appointments']).length
                if (size > 1) {
                    return day
                }
            }
        )

        const daysForDisable = daysFullOfAppointments.map((e: any) => {
            const date = e.date.split('-')
            const intDate = date.map((n: any) => {
                return parseInt(n)
            })
            return intDate
        })
        setFullDays(daysForDisable)
    }, [data])

    return (
        <main className='h-screen grid content-center justify-items-center gap-10 p-2'>
            <div className='grid content-center justify-items-center max-w-xs md:max-w-md xl:max-w-lg gap-5'>
                <Title color='text-orange-400'>
                    Selecciona el día de tu turno
                </Title>
                <Body color='text-black'>
                    Recuerda que debes elegir un día de lunes a viernes y ese
                    día se atenderá por orden de llegada en el horario de 8:00 a
                    12:00.
                </Body>
            </div>
            <AppointmentPicker fullDays={fullDays} />
        </main>
    )
}
