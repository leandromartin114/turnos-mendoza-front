import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux-toolkit'
import { getMe, getSavedToken } from '../lib/api'
import { RootState, setUserData } from '../store'
import { rtdb } from '@/lib/firebase'
import { ref, onValue, off, get, DataSnapshot } from 'firebase/database'

// Gets the token value
export function useGetToken() {
    const getToken = getSavedToken()
    const [token, setToken] = useState() as any

    useEffect(() => {
        setToken(getToken)
    }, [getToken])

    return { token }
}

// Gets the user data
export function useMe() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMe()
            dispatch(setUserData(data))
        }
        fetchData()
    }, [])

    const { userData } = useAppSelector((state: RootState) => state.userData)
    return userData
}

// Conect to realtime db and gets the appointments
export function useGetAppointments() {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        // Obtener datos iniciales
        const fetchData = async () => {
            const snapshot = await get(ref(rtdb, '/days'))
            if (snapshot.exists()) {
                setData(snapshot.val())
            }
        }

        fetchData()

        // Suscribirse a los cambios en la base de datos
        const dataRef = ref(rtdb, '/days')
        const dataCallback = (snapshot: DataSnapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val())
            }
        }
        onValue(dataRef, dataCallback)

        // Limpiar suscripciones cuando el componente se desmonte
        return () => {
            off(dataRef, dataCallback as any)
        }
    }, [])

    return data
}
