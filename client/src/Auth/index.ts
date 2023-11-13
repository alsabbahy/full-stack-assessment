// write auth module here with login, logout, register, etc. functions and export them
import axios from 'axios'

export const login = async (email: string, password: string) => {
  const response = await axios.post('/api/login', { email, password })
  return response.data
}

export const register = async (email: string, password: string) => {
  const response = await axios.post('/api/register', { email, password })
  return response.data
}

export const logout = async () => {
  const response = await axios.post('/api/logout')
  return response.data
}

export const getUser = async () => {
  const response = await axios.get('/api/user')
  return response.data
}
