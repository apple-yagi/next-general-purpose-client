import { useRouter } from "next/router"
import { FC, useContext, useEffect } from "react"
import AuthContext from '../auth/AuthContext'

const PrivateRoute: FC = ({ children }) => {
  const { info } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!info.token) {
      router.push('/users/login')
    }
  }, [info])

  return <>{children}</>
}

export default PrivateRoute