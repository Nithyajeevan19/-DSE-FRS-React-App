// src/pages/Login.jsx (Verify the OUTSIDE DIV)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn, User, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  // ... (state and handleSubmit function remain the same) ...
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      login(email, password, role);
      navigate("/dashboard");
    } catch (er) {
      setError(er.message);
    }
  }

  return (
    // ⬅️ THIS IS THE CRUCIAL WRAPPER DIV 
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.form 
        onSubmit={handleSubmit} 
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* ... (rest of the form content) ... */}
        <div className="flex items-center justify-center mb-6">
          <LogIn size={32} className="text-indigo-600 mr-2 drop-shadow-sm" />
          <h2 className="text-3xl font-extrabold text-indigo-700">System Login</h2>
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            type="email" 
            placeholder="Email Address" 
            required 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" 
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" 
          />
        </div>

        {/* Role Select */}
        <div className="relative mb-6">
          <Users size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select 
            value={role} 
            onChange={e => setRole(e.target.value)} 
            required 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 cursor-pointer"
          >
            <option value="" disabled>Select Role</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          {/* Custom arrow icon */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
            &#9660;
          </span>
        </div>

        {error && (
          <motion.div 
            className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center border border-red-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <motion.button 
          type="submit" 
          className="w-full bg-indigo-600 text-white text-lg font-bold py-3 rounded-xl hover:bg-indigo-700 transition duration-200 shadow-lg shadow-indigo-300/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          LOG IN
        </motion.button>

        <p className="mt-4 text-center text-gray-600">
          No account? 
          <a href="/register" className="text-indigo-600 font-semibold hover:text-indigo-700 ml-1 transition">Register here</a>
        </p>
      </motion.form>
    </div>
  );
}