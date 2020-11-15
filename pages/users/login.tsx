import { FC, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import AuthContext from "../../src/auth/AuthContext"
import { Alert } from "@material-ui/lab";

const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login, info } = useContext(AuthContext);

  const router = useRouter()

  useEffect(() => {
    if (info.token) {
      router.push('/users')
    }
  })

  return (
    <div>
      <h1>Hello!</h1>
      {info.error &&
        <Alert severity='error' >{info.error}</Alert>
      }
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => login(username, password)} disabled={!username || !password}>Login</button>
    </div>
  )
}

export default LoginPage