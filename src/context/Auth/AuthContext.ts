import { createContext, useContext } from "react";

interface AuthContextType {
  username: string | null;
  token: string | null;
  firstname: string | null;
  lastname: string | null;
  login: (username: string, token: string) => void;
  isAuthenticated: boolean;
  logout: () => void;
}

// Create the AuthContext with updated default values
export const AuthContext = createContext<AuthContextType>({
  username: null,
  token: null,
  firstname: null,
  lastname: null,
  login: () => {},
  isAuthenticated: false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);
