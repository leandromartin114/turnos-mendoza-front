import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { useAppDispatch } from '@/hooks/redux-toolkit'
import { setUserEmail, setUserData } from '@/store'
import { sendCodeSignUp, getToken, getMe } from '@/lib/api'
import { MainButton } from '@/ui/Buttons'
import { Label } from '@/ui/Typography'
import { Loader } from '@/ui/Loader'

export const SignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loader, setLoader] = useState(false)
    const dispatch = useAppDispatch()

    // Sending the code to the user email
    const handleSendCode = async (data: any) => {
        setLoader(true)
        try {
            dispatch(setUserEmail(data.email))
            setTimeout(() => {
                toast.message('Código enviado', {
                    description: `Enviamos tu código a: ${data.email}`,
                })
            }, 3000)
            const res = await sendCodeSignUp(
                data.fullName,
                data.email,
                data.phoneNumber,
                data.address,
                data.document
            )
            if (res) {
                setLoader(false)
                setEmail(data.email)
            }
            reset()
        } catch (error) {
            setLoader(false)
            toast.message('Hubo un error', {
                description: `Inténtalo nuevamente por favor, o ingresa con tu email si ya tienes usuario.`,
            })
            return error
        }
    }

    // Sign in the user and getting data from server
    const handleLogin = async (data: any) => {
        setLoader(true)
        try {
            const token = await getToken(email, data.code)
            if (token) {
                toast.success('Registrado con éxito', {
                    description: `Bienvenido`,
                })
                const dataFromServer = await getMe()
                dispatch(setUserData(dataFromServer))
            }
            setTimeout(() => {
                router.push('/')
            }, 3000)
        } catch (error) {
            setLoader(false)
            toast.error('Hubo un error', {
                description: `Inténtalo nuevamente por favor`,
            })
            return error
        }
        reset()
    }

    return (
        <>
            {!email ? (
                <form
                    className='grid content-center gap-2'
                    onSubmit={handleSubmit(handleSendCode)}
                >
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>nombre</Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='text'
                            {...register('fullName', { required: true })}
                        />
                        {errors.fullName && <span>This field is required</span>}
                    </label>
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>email</Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='email'
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </label>
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>
                            número de teléfono
                        </Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='number'
                            {...register('phoneNumber', { required: true })}
                        />
                        {errors.phoneNumber && (
                            <span>This field is required</span>
                        )}
                    </label>
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>dirección</Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='text'
                            {...register('address', { required: true })}
                        />
                        {errors.address && <span>This field is required</span>}
                    </label>
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>documento</Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='number'
                            {...register('document', { required: true })}
                        />
                        {errors.document && <span>This field is required</span>}
                    </label>
                    <MainButton type='submit'>
                        {loader ? <Loader /> : 'Enviar'}
                    </MainButton>
                </form>
            ) : (
                <form
                    className='grid content-center gap-4'
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>código</Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='number'
                            {...register('code', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </label>
                    <MainButton type='submit'>
                        {loader ? <Loader /> : 'Ingresar'}
                    </MainButton>
                </form>
            )}
            <Toaster richColors />
        </>
    )
}
