import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userAppointmentState {
    appointment: string
}

const initialState: userAppointmentState = {
    appointment: '',
}

export const userAppointmentSlice = createSlice({
    name: 'userAppointment',
    initialState: initialState,
    reducers: {
        setUserAppointment: (state, { payload }: PayloadAction<string>) => {
            state.appointment = payload
        },
    },
})

export const { setUserAppointment } = userAppointmentSlice.actions
