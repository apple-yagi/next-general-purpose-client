import { FC, useContext, useEffect } from "react";
import AuthContext from "../../src/auth/AuthContext"
import { useRouter } from 'next/router'

const Users: FC = () => {
  const { info } = useContext(AuthContext);
  const router = useRouter()

  useEffect(() => {
    if (!info.token) {
      router.push('/users/login')
    }
  }, [info])

  return (
    <div>
      <h1>User Page</h1>
      { info.token && <h2>{info.token}</h2>}
    </div>
  )
}



export default Users