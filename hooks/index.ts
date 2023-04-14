import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux-toolkit'
import { getMe, getSavedToken } from '../lib/api'
import { RootState, setUserData } from '../store'

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
