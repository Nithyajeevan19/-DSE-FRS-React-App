// src/components/SearchBar.jsx
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder, className = '' }) {
  return (
    <div className={`relative flex items-center w-full max-w-sm mx-auto shadow-md rounded-lg mb-6 ${className}`}>
      <Search size={20} className="absolute left-3 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>
  );
}