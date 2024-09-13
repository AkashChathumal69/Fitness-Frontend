import { createContext, useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode"; // No curly braces needed for jwt-decode
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setauthToken] = useState(
    () => JSON.parse(localStorage.getItem("authToken")) || null
  );
  const [user, setUser] = useState(() =>
    authToken ? jwtDecode(authToken.access) : null
  );
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    // Check if token exists on component mount
    const token = JSON.parse(localStorage.getItem("authToken"));

    if (token) {
      setauthToken(token);
      setUser(jwtDecode(token.access));
    } else {
      navigate("/login"); // Navigate to login if no token is found
    }
  }, [navigate]);

  const logout = useCallback(() => {
    setauthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  }, [navigate]);

  // Wrap UpdateToken in useCallback
  const UpdateToken = useCallback(async () => {
    console.log("update token");

    const response = await fetch("http://localhost:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authToken?.refresh,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setauthToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      console.log(JSON.stringify(data));
    } else {
      logout();
    }

    if (loading) {
      setloading(false);
    }
  }, [authToken, loading, logout]); // Add logout to the dependency array

  useEffect(() => {
    if (loading) {
      UpdateToken();
    }

    let fourMinuteInterval = 60 * 60 * 60 * 4; // 4 hours in milliseconds
    const interval = setInterval(() => {
      if (authToken) {
        UpdateToken();
      }
    }, fourMinuteInterval);

    return () => clearInterval(interval);
  }, [authToken, loading, UpdateToken]); // Add UpdateToken to dependency array

  const login = async (username, password) => {
    console.log("Form submitted");

    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setauthToken(data);
      setUser(jwtDecode(data.access)); // Set user data
      localStorage.setItem("authToken", JSON.stringify(data)); // Save token to localStorage
      navigate("/"); // Navigate to home after login
    } else {
      throw new Error(data.error);
    }
  };

  const contextData = {
    login,
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
