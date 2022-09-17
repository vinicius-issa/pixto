import axios from "axios"
import { SANTANDER_API_URL, SANTANDER_AUTH_URL } from "../constants"
import qs from "qs"
import { getAuthToken, removeAuthToken } from '../services/auth-token'

const instance = axios.create()

instance.interceptors.response.use(response => response, error => {
  if(error.response.status === 401) {
    removeAuthToken()
    window.location.href = '/login'
  }

  return Promise.reject(error)
})

export const login = (clientId: string, clientSecret: string) => {
  const data = qs.stringify({
    client_id: clientId,
    client_secret: clientSecret,
  })

  return instance.post(`${SANTANDER_AUTH_URL}/oauth/token`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      grant_type: "client_credentials",
    },
  })
}

export const getPix = (startDate: Date, endDate:Date) => {
  const token = getAuthToken()
  return instance.get(`${SANTANDER_API_URL}/pix`, {
    headers: {
      authorization: `Bearer ${token}`
    },
    params: {
      inicio: startDate,
      fim: endDate,
      itensPorPagina: 1000,
    },
  })
}