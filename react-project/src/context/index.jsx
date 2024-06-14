import { AuthProvider } from "./auth/AuthContext";

const GlobalProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalProvider;
