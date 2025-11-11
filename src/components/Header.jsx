// src/components/Header.jsx (SUPERB UI)
import { Building2, Menu } from 'lucide-react'; // Imported Menu for clarity
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="sticky top-0 bg-indigo-700/95 backdrop-blur-md text-white flex items-center justify-between px-6 py-3 shadow-2xl z-50 border-b border-indigo-500/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu (More visible and interactive) */}
        <motion.button 
          className="lg:hidden p-2 rounded-full hover:bg-white/20 transition-all focus:outline-none"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
        >
          <Menu size={24} className="text-white" />
        </motion.button>
        
        {/* Title */}
        <motion.h1 
          className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          DSE – FRS
        </motion.h1>
      </div>
      
      {/* Emblem with enhanced animation */}
      <motion.span
        className="rounded-full bg-white/40 backdrop-blur p-2 shadow-xl border border-white/50"
        initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 15 }}
      >
        <Building2 size={32} className="text-indigo-900 drop-shadow-md" />
      </motion.span>
    </motion.header>
  );
}