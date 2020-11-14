import { FC, useContext, useState } from "react";
import AuthContext from "../../src/auth/AuthContext"

const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h1>Hello!</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => login(username, password)} disabled={!username || !password}>Login</button>
    </div>
  )
}

export default LoginPage