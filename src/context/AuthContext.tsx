import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

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
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const logIn = () => {
    dispatch({type: 'signIn'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signin: logIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
