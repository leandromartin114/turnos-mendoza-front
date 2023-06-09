import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { setUserData, RootState } from '@/store'
import { deleteAppointment, updateMe, getMe } from '@/lib/api'
import { MainButton, SecondaryButton } from '@/ui/Buttons'
import { Label } from '@/ui/Typography'
import { Loader } from '@/ui/Loader'

export const UpdateForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [loader, setLoader] = useState(false)
    const dispatch = useAppDispatch()
    const { userData } = useAppSelector((state: RootState) => state.userData)

    const handleUpdate = async (data: any) => {
        setLoader(true)
        const res = await updateMe(
            data.fullName,
            data.email,
            data.phoneNumber,
            data.address,
            data.document
        )
        if (res) {
            setTimeout(() => {
                toast.message('Datos actualizados', {
                    description: `Actualizamos tus datos correctamente`,
                })
            }, 2000)
            setLoader(false)
            const dataFromServer = await getMe()
            dispatch(setUserData(dataFromServer))
        }
    }

    const handleDeleteAppointment = async () => {
        setLoader(true)
        setTimeout(() => {
            toast.message('Turno Eliminado', {
                description: `Puedes volver a solicitar uno nuevo desde la sección turnos`,
            })
        }, 3000)
        const res = await deleteAppointment(userData.appointment as string)
        if (res) {
            setLoader(false)
            const dataFromServer = await getMe()
            dispatch(setUserData(dataFromServer))
        }
    }

    useEffect(() => {
        async function fetchUserData() {
            const dataFromServer = await getMe()
            dispatch(setUserData(dataFromServer))
        }
        fetchUserData()
    }, [])

    return (
        <>
            <form
                className='grid content-center gap-2 py-2'
                onSubmit={handleSubmit(handleUpdate)}
            >
                <label className='flex flex-col gap-1'>
                    <Label color='text-orange-400'>nombre</Label>
                    <input
                        className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                        type='text'
                        defaultValue={userData ? userData.fullName : ''}
                        {...register('fullName', { required: true })}
                    />
                    {errors.fullName && <span>This field is required</span>}
                </label>
                <label className='flex flex-col gap-1'>
                    <Label color='text-orange-400'>email</Label>
                    <input
                        className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                        type='email'
                        defaultValue={userData ? userData.email : ''}
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                </label>
                <label className='flex flex-col gap-1'>
                    <Label color='text-orange-400'>número de teléfono</Label>
                    <input
                        className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                        type='number'
                        defaultValue={userData ? userData.phoneNumber : ''}
                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber && <span>This field is required</span>}
                </label>
                <label className='flex flex-col gap-1'>
                    <Label color='text-orange-400'>dirección</Label>
                    <input
                        className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                        type='text'
                        defaultValue={userData ? userData.address : ''}
                        {...register('address', { required: true })}
                    />
                    {errors.address && <span>This field is required</span>}
                </label>
                <label className='flex flex-col gap-1'>
                    <Label color='text-orange-400'>documento</Label>
                    <input
                        className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                        type='number'
                        defaultValue={userData ? userData.document : ''}
                        {...register('document', { required: true })}
                    />
                    {errors.document && <span>This field is required</span>}
                </label>
                <MainButton type='submit'>
                    {loader ? <Loader /> : 'Guardar'}
                </MainButton>
            </form>
            <div className='w-full grid content-center gap-2 py-2'>
                <label className='w-full flex flex-col gap-1'>
                    <Label color='text-orange-400'>turno</Label>
                    <div className='h-11 text-lg bg-orange-100 rounded-lg p-2 w-full'>
                        {userData ? userData.appointment : ''}
                    </div>
                    {errors.turno && <span>This field is required</span>}
                </label>
                <SecondaryButton
                    onClick={handleDeleteAppointment}
                    type='button'
                >
                    {loader ? <Loader /> : 'Eliminar turno'}
                </SecondaryButton>
            </div>
            <Toaster richColors />
        </>
    )
}
