import { createContext, ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProps {
  authenticated: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
  userInfo: string;
}

export const AuthContext = createContext({} as AuthProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const { authenticated, handleLogin, handleLogout, userInfo } = useAuth();

  const provider = {
    authenticated,
    handleLogin,
    handleLogout,
    userInfo,
  };
  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
}
