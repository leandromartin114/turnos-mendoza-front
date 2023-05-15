import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { userEmailSlice } from './userEmail/userEmailSlice'
import { userDataSlice } from './userData/userDataSlice'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null)
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value)
        },
        removeItem(_key: any) {
            return Promise.resolve()
        },
    }
}

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('session')
        : createNoopStorage()

const reducers = combineReducers({
    userData: userDataSlice.reducer,
    userEmail: userEmailSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userData', 'userEmail'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
