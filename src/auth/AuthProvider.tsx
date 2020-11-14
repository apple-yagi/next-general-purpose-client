import { FC, useCallback, useMemo, useState } from "react"
import axios, { AxiosResponse } from 'axios'
import AuthContext from './AuthContext'
const API_URL = process.env.API_URL

const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const login = useCallback(
    async (username: string, password: string) => {
      try {
        const res: AxiosResponse<string> = await axios.post(`${API_URL}users/login`, { name: username, password: password })
        setToken(res.data)
      } catch (e) {
        throw Error(e.message)
      }
    },
    []
  )
  const logout = useCallback(() => {
    setToken(null)
  }, [])
  const info = useMemo(() => (token ? { token } : null), [token])

  return (
    <AuthContext.Provider value={{ login, logout, info }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider