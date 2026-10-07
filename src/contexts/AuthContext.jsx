import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const BASE_URL = "http://localhost:3000";

function AuthProvider({ children }) {
  const [user, setUser] = useState({ emailAddress: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [formError, setFormError] = useState("");

  async function verifyUser(email, passw) {
    // cannot send user information for verification, hence verification happens here!

    const users = await fetchUsers("Could not fetch user");
    if (!users) return; // fetch request failure won't do anything (error handled through error state)

    const user = users.find(user => user.email === email && user.password === passw);
    if (!user) {
      !formError && setFormError("User not found");
      return false;
    }
    setIsAuthenticated(true);
    setUser({ email: user.email });
    return true;
  }

  async function createUser(email, passw) {
    const userExists = users => users.some(user => user.email === email);

    const users = await fetchUsers("Could not register");
    console.log(users);

    if (!users) return; // request failure

    if (userExists(users)) return setFormError("User already exists"); // user exists
    console.log(userExists(users));

    setFormError("");
    setIsLoadingForm(true);
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: crypto.randomUUID(), email: email, password: passw }),
      });
      if (!res.ok) throw new Error();

      // const data = await res.json();
      // console.log(data);
    } catch {
      setFormError("Could not error");
      console.error("Error creating new user");
    } finally {
      setIsLoadingForm(false);
    }

    return true;
  }

  async function fetchUsers(errorMsg) {
    try {
      setIsLoadingForm(true);
      setFormError("");
      const res = await fetch(`${BASE_URL}/users`);
      const data = await res.json();

      return data;
    } catch {
      setFormError(errorMsg);
      console.error("Error fetching all users");

      return;
    } finally {
      setIsLoadingForm(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoadingForm, formError, verifyUser, createUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Can't use auth context outside of AuthProvider boundary");
  return context;
}

export default AuthProvider;
