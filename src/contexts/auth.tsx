import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface AuthContextData {
  login: (email: string, password: string) => Promise<void>
  token: String
  user: object | null
  signed: boolean
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>('')
  const [user, setUser] = useState<object | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
    const response = await api.post('http://localhost:4000/login', {
      email: email,
      password: password,});
    console.log(response)
    // const user = response.body

    setUser(response.data);
    setToken(response.data.token)
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    
    sessionStorage.setItem('@App:token', response.data.token);
    sessionStorage.setItem('@App:user', JSON.stringify(response.data));
  }


  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);
  return (
    <AuthContext.Provider value={{
      signed: Boolean(user),
      login,
      token,
      user}}>
      {children}
    </AuthContext.Provider>
  );
 };

 export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;