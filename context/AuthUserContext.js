import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "@/components/useFirebaseAuth";

const authUserContext = createContext();

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
