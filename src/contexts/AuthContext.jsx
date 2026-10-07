import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const BASE_URL = "http://localhost:3000";

function AuthProvider({ children }) {
  const [user, setUser] = useState({ emailAddress: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  async function verifyUser(email, passw) {
    // cannot send user information for verification, hence verification happens here!

    const users = await fetchUsers();
    if (!users) return; // fetch request failure won't do anything (error handled through error state)

    const user = users.find(user => user.email === email && user.password === passw);
    if (!user) {
      !loginError && setLoginError("User not found");
      return false;
    }
    setIsAuthenticated(true);
    setUser({ email: user.email });
    return true;
  }

  async function fetchUsers() {
    try {
      setIsLoadingLogin(true);
      setLoginError("");
      const res = await fetch(`${BASE_URL}/users`);
      const data = await res.json();

      return data;
    } catch {
      setLoginError("Could not fetch user");
      return;
    } finally {
      setIsLoadingLogin(false);
    }
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, verifyUser, isLoadingLogin, loginError }}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Can't use auth context outside of AuthProvider boundary");
  return context;
}

export default AuthProvider;
