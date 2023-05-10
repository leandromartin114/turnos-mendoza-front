import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userData {
    fullName: string
    email: string
    phoneNumber?: number
    address?: string
    document?: number
    appointment?: string
    id?: number
}

interface userDataState {
    userData: userData
}

const initialState: userDataState = {
    userData: {
        fullName: '',
        email: '',
        phoneNumber: Number(''),
        address: '',
        appointment: '',
        id: Number(''),
    },
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<userData>) => {
            state.userData = payload
        },
    },
})

export const { setUserData } = userDataSlice.actions
