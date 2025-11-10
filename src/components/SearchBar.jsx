import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="w-full max-w-md flex items-center bg-gray-100 rounded-lg shadow px-3 py-2">
      <Search className="text-gray-400 mr-2" size={20} />
      <input
        className="bg-transparent w-full outline-none text-base"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}
