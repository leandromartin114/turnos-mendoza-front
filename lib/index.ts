export const BASE_URL = 'https://turnosmendoza-api.vercel.app/api'

// Main API Fetch. It takes as parameters, options and the specific endpoint.
export async function fetchAPI(input: RequestInfo | URL, options?: any) {
    const url = BASE_URL + input
    const newOptions: any = options || {}
    newOptions.headers ||= {}
    // Getting the token if it was saved before
    const token = getSavedToken()
    if (token) {
        newOptions.headers.Authorization = `Bearer ${token}`
    }
    newOptions.headers['Content-type'] = 'application/json'
    if (newOptions.body) {
        newOptions.body = JSON.stringify(newOptions.body)
    }

    const res = await fetch(url, newOptions)
    if (res.status >= 200 && res.status < 300) {
        const data = await res.json()
        return { data, status: res.status }
    } else {
        const json = await res.json()
        throw {
            message: `Hubo un error`,
            status: res.status,
            error: json,
        }
    }
}

// It sends the code when the user signup for the first time
export async function sendCodeSignUp(
    fullName: string,
    email: string,
    phoneNumber: number,
    address: string,
    document: number
) {
    try {
        const data = await fetchAPI('/auth/signup', {
            method: 'POST',
            body: { email, fullName, phoneNumber, address, document },
        })
        return data
    } catch (error) {
        return error
    }
}

// It sends the code when the user login
export async function sendCodeLogin(email: string) {
    try {
        const data = await fetchAPI('/auth/login', {
            method: 'POST',
            body: { email },
        })
        return data
    } catch (error) {
        return error
    }
}

//Check the email and code for login the user and get the token
export async function getToken(email: string, code: string) {
    const res = await fetchAPI('/auth/token', {
        method: 'POST',
        body: {
            email,
            code: Number(code),
        },
    })
    // We save the token in the data obj
    saveToken(res.data.token)
    return true
}
// Saving the token in localStorage
export function saveToken(token: string) {
    localStorage.setItem('auth_token', token)
}

// Getting the token saved before from localStorage
export function getSavedToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token')
        return token
    }
    return false
}

// Deleting the token from localStorage
export function removeToken() {
    localStorage.removeItem('auth_token')
}

// It gets the user profile data
export async function getMe() {
    const token = getSavedToken()
    if (token) {
        try {
            const res = await fetch(BASE_URL + '/me/profile', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `bearer ${token}`,
                },
            })
            const data = await res.json()
            return data
        } catch (error) {
            return error
        }
    }
}
