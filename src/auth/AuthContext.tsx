import React from 'react'

interface AuthProps {
  token: string;
  isLoading: boolean;
  error: string;
}

interface AuthMethods {
  login(username: string, password: string): void;
  logout(): void;
}

type AuthContext = { info: AuthProps | null } & AuthMethods;

const context = React.createContext<AuthContext>({
  info: { token: '', isLoading: false, error: '' },
  login(): void {
    throw Error("Not Implemented")
  },
  logout(): void {
    throw Error("Not Implemented")
  }
})

export default context