import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState, 
} from 'react';
import api from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  nomeAplicativo: string;
  contexto: string;
}

interface IAuthContextData {
  user: User;
  signIn(login: string, senha: string): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function signIn(login: string, senha: string) {
    try {
      const response = await api.post(`/login`, {
        login,
        senha
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};