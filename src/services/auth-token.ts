import { AUTH_TOKEN_NAME } from '../constants'

export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_NAME)
}

export const setAuthToken = (value: string) => {
  localStorage.setItem(AUTH_TOKEN_NAME, value)
}

export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_NAME)
}