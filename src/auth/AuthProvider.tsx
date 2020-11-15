import { FC, useCallback, useMemo, useState } from "react"
import axios, { AxiosResponse } from 'axios'
import AuthContext from './AuthContext'
const API_URL = process.env.API_URL

const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setLoadStatus] = useState<boolean>(false);
  const [error, setError] = useState<string>('')

  const login = useCallback(
    async (username: string, password: string) => {
      setLoadStatus(true)
      try {
        const res: AxiosResponse<{ access_token: string }> = await axios.post(`${API_URL}auth/login`, { name: username, password: password })
        setToken(res.data.access_token)
      } catch (e) {
        setError('認証に失敗しました')
      }
      setLoadStatus(false)
    },
    []
  )
  const logout = useCallback(() => {
    setToken(null)
  }, [])
  const info = useMemo(() => ({ token, isLoading, error }), [token, isLoading, error])

  return (
    <AuthContext.Provider value={{ login, logout, info }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider