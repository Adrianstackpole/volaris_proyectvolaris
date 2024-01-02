import axios from 'axios'

const BASE_URL = import.meta.env.VITE_AZURE_REDIRECT_URI

interface SignUpResponse {
  token: string
}

export const loginRequest = (idToken: string) => axios.post<SignUpResponse>(`${BASE_URL}/auth/signup`, { jwt: idToken })
