import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react'

import api from '../services/api'

interface Props {
  children: ReactNode
}

interface AuthContextData {
  login: (email: string, password: string) => Promise<void>
  token: string
  user: Record<string, string> | null | undefined
  signed: boolean
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [token, setToken] = useState<string>('')
  const [user, setUser] = useState<Record<string, string> | null>()

  const login = async (email: string, password: string): Promise<void> => {
    const response = await api.post('http://localhost:4000/login', {
      email,
      password,
    })

    setUser(response.data)
    setToken(response.data.token)
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    sessionStorage.setItem('@App:token', response.data.token)
    sessionStorage.setItem('@App:user', JSON.stringify(response.data))
  }

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    const storagedToken = sessionStorage.getItem('@App:token')

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        login,
        token,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export default AuthContext
