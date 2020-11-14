import { FC, useContext } from "react";
import AuthContext from "../../src/auth/AuthContext"
import Router from 'next/router'

const Users: FC = () => {
  const { info } = useContext(AuthContext);

  return (
    <div>
      <h1>User Page</h1>
      { info && <h2>{info.token}</h2>}
    </div>
  )
}



export default Users