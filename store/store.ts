import { configureStore } from '@reduxjs/toolkit'
import { userEmailSlice } from './userEmail/userEmailSlice'
import { userDataSlice } from './userData/userDataSlice'
import { userAppointmentSlice } from './userAppointment/userAppointmentSlice'

export const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer,
        userEmail: userEmailSlice.reducer,
        userAppointment: userAppointmentSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
