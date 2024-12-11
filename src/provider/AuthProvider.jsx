import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load token from cookies on initial render
  useEffect(() => {
    const jwt = Cookies.get('jwt');
    if (jwt) {
      setToken(jwt);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newToken) => {
    Cookies.set('jwt', newToken, {
      expires: 1, // 1 day
      secure: true,
      sameSite: 'Strict',
    });
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('jwt');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ setToken, setIsAuthenticated,isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
