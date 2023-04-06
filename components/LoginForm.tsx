import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MainButton } from '@/ui/Buttons'
import { Label } from '@/ui/Typography'

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const [email, setEmail] = useState('')

    const handleSendCode = (data: any) => {
        console.log(data)
        setEmail(data.email)
        reset()
    }

    const handleLogin = (data: any) => {
        console.log(data)
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
                    <MainButton type='submit'>Enviar</MainButton>
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
                            {...register('código', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </label>
                    <MainButton type='submit'>Ingresar</MainButton>
                </form>
            )}
        </>
    )
}
