import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks/redux-toolkit'
import { Toaster, toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { setUserEmail, setUserData } from '@/store'
import { sendCodeLogin, getToken, getMe } from '@/lib/api'
import { MainButton } from '@/ui/Buttons'
import { Label } from '@/ui/Typography'
import { Loader } from '@/ui/Loader'

export const LoginForm = () => {
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
        dispatch(setUserEmail(data.email))
        const res: any = await sendCodeLogin(data.email)
        if (res.status === 400) {
            setTimeout(() => {
                toast.error('Usuario no encontrado', {
                    description: `El usuario no existe, debes registrarte`,
                })
            }, 2000)
            router.push('/signup')
        } else {
            setTimeout(() => {
                toast.message('Código enviado', {
                    description: `Enviamos tu código a: ${data.email}`,
                })
            }, 2000)
            setLoader(false)
            setEmail(data.email)
        }
        reset()
    }
    // Sign in the user and getting data from server
    const handleLogin = async (data: any) => {
        setLoader(true)
        try {
            const token = await getToken(email, data.code)
            if (token) {
                toast.success('Logueado con éxito', {
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
                    className='grid content-center gap-4'
                    onSubmit={handleSubmit(handleSendCode)}
                >
                    <label className='flex flex-col gap-1'>
                        <Label color='text-orange-400'>email</Label>
                        <input
                            className='text-lg bg-orange-100 rounded-lg p-2 w-full'
                            type='email'
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
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
