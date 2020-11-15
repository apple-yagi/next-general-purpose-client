import { FC, useContext } from "react";
import AuthContext from "../../src/auth/AuthContext"
import PrivateRoute from "../../src/guards/PrivateRoute";

const Users: FC = () => {
  const { info } = useContext(AuthContext);

  return (
    <PrivateRoute>
      <h1>User Page</h1>
      { info.token && <h2>{info.token}</h2>}
    </PrivateRoute>
  )
}



export default Users