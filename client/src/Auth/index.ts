// write auth module here with login, logout, register, etc. functions and export them
import axios from 'axios'
const API_URL = 'http://localhost:3000'
const axiosInstance = axios.create({
  baseURL: API_URL
})
export const login = async (email: string, password: string): Promise<{ user: IUser; token: string; expiresIn: number }> => {
  const response = await axiosInstance.post('/api/auth/login', { email, password })
  return response.data
}

export const register = async ({
  email,
  password,
  firstName,
  lastName
}: {
  email: string
  password: string
  firstName: string
  lastName: string
}): Promise<{
  expiresIn: number
  token: string
  user: IUser
}> => {
  try {
    const response = await axiosInstance.post('/api/auth/register', { email, password, firstName, lastName })
    return response.data
  } catch (err) {
    throw err
  }
}

export const logout = async () => {
  await axiosInstance.post('/api/auth/logout')
  return true
}

export const getUser = async (id: string) => {
  const response = await axiosInstance.get('/api/users/:id'.replace(':id', id))
  return response.data
}
