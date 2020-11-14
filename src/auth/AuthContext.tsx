import React from 'react'

interface AuthProps {
  token: string;
}

interface AuthMethods {
  login(username: string, password: string): void;
  logout(): void;
}

type AuthContext = { info: AuthProps | null } & AuthMethods;

const context = React.createContext<AuthContext>({
  info: null,
  login(): void {
    throw Error("Not Implemented")
  },
  logout(): void {
    throw Error("Not Implemented")
  }
})

export default context