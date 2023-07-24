import React, {createContext} from 'react';

//Definicion de estructura de datos a usar
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Definicion del estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signin: () => void;
}

//Creacion del Contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente Proveedor de estado del contexto
export const AuthProvider = ({children}: any) => {
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signin: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
