import { format, addMonths } from 'date-fns'
import { es } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { useEffect, useState } from 'react'
import 'react-day-picker/dist/style.css'
import { getSaturdaysAndSundays } from '@/lib/helpers'
import { Loader } from '@/ui/Loader'
import { Toaster, toast } from 'sonner'
import { MainButton } from '@/ui/Buttons'
// import { createAppointment } from '@/lib/api'
import { useAppSelector } from '@/hooks/redux-toolkit'
import { RootState } from '@/store'

export const AppointmentPicker = ({ fullDays }: any) => {
    const { userData } = useAppSelector((state: RootState) => state.userData)
    const [selected, setSelected] = useState<Date>()
    const [months, setMonths] = useState(1)
    const [loader, setLoader] = useState(false)
    const start = new Date()
    const end = addMonths(start, 2)
    const weekends = getSaturdaysAndSundays(start, 60)

    let footer = <p>Elige un día.</p>
    if (selected) {
        footer = <p>Elegiste {format(selected, 'PP')}.</p>
    }

    const toDisable = fullDays.map((d: any) => {
        const date = new Date(d[0], d[1] - 1, d[2])
        return date
    })

    const disabledDays = toDisable.concat(weekends)

    const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #fb923c;
    color: #fb923c;
  }
  .my-today { 
    font-weight: bold;
    font-size: 130%;
  }
  .my-disabled {
    text-decoration-line: line-through;
    text-decoration-thickness: 3px;
    color: #f7750c;
  }
`
    const handleAppointment = async () => {
        if (selected) {
            const date = selected.toDateString()
            setLoader(true)
            try {
                setTimeout(() => {
                    toast.message('Turno confirmado', {
                        description: `Enviamos la confirmación de tu turno a: ${userData.email}`,
                    })
                }, 3000)
                const res = {
                    date,
                    fullName: userData.fullName,
                    document: userData.document,
                    email: userData.email,
                }
                console.log(res)

                // const res = await createAppointment(
                //     date,
                //     userData?.fullName,
                //     userData.document,
                //     userData.email,
                // )
                if (res) {
                    setLoader(false)
                }
            } catch (error) {
                setLoader(false)
                return error
            }
        } else {
            toast.error('Sin turno elegido', {
                description: `Debes seleccionar un día para el turno`,
            })
        }
    }

    useEffect(() => {
        function handleWindowResize() {
            if (window.innerWidth > 640) {
                setMonths(2)
            }
            if (window.innerWidth < 640) {
                setMonths(1)
            }
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <>
            <style>{css}</style>
            <DayPicker
                locale={es}
                mode='single'
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                numberOfMonths={months}
                fromDate={start}
                toDate={end}
                pagedNavigation
                disabled={disabledDays}
                modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today',
                    disabled: 'my-disabled',
                }}
                styles={{
                    caption: { color: '#fb923c' },
                }}
            />
            <MainButton onClick={handleAppointment} type='button'>
                {loader ? <Loader /> : 'Enviar'}
            </MainButton>
            <Toaster richColors />
        </>
    )
}
