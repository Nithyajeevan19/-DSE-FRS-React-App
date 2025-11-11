import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [
      { email: 'admin@demo.com', password: 'admin123', role: 'admin' },
      { email: 'faculty@demo.com', password: 'faculty123', role: 'faculty' },
      { email: 'student@demo.com', password: 'student123', role: 'student' }
    ];
  });

  useEffect(() => {
    const current = localStorage.getItem("currentUser");
    if (current) setUser(JSON.parse(current));
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const register = (email, password, role) => {
    if (users.some(u => u.email === email)) throw new Error("User already exists");
    const newUser = { email, password, role };
    setUsers([...users, newUser]);
  };
  const login = (email, password, role) => {
    const found = users.find(u => u.email === email && u.password === password && u.role === role);
    if (!found) throw new Error("Invalid credentials or role");
    setUser(found);
    localStorage.setItem("currentUser", JSON.stringify(found));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() { return useContext(AuthContext); }
