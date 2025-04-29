import { createContext, useContext } from 'react';
import useAuthState from '../Hooks/useAuthState';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = useAuthState();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
