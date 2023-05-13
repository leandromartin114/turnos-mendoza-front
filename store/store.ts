import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { userEmailSlice } from './userEmail/userEmailSlice'
import { userDataSlice } from './userData/userDataSlice'
import { userAppointmentSlice } from './userAppointment/userAppointmentSlice'

// export const store = configureStore({
//     reducer: {
//         userData: userDataSlice.reducer,
//         userEmail: userEmailSlice.reducer,
//         userAppointment: userAppointmentSlice.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// })

const reducers = combineReducers({
    userData: userDataSlice.reducer,
    userEmail: userEmailSlice.reducer,
    userAppointment: userAppointmentSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
