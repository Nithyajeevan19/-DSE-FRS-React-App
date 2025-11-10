import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center space-x-3">
        <button className="sm:hidden p-2 rounded-lg hover:bg-indigo-700 transition-all">
          {/* Hamburger menu icon for mobile - placeholder */}
          <span className="block w-5 border-t-2 border-white mb-1"></span>
          <span className="block w-5 border-t-2 border-white"></span>
        </button>
        <h1 className="text-xl font-bold tracking-wide">DSE – FRS</h1>
      </div>
      {/* Right side: government emblem placeholder */}
      <span className="rounded-full bg-white bg-opacity-20 p-2">
        <Building2 size={32} className="text-white" />
      </span>
    </header>
  );
}
