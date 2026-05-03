import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import api from './api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      api.get('/auth/me')
        .then(res => setUser(res.data.user))
        .catch(() => Cookies.remove('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = (token, userData) => {
    Cookies.set('token', token, { expires: 7 });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
