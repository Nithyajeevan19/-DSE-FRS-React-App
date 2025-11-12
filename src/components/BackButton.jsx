import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BackButton({ to = -1, label = 'Back' }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (typeof to === 'string') {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, x: -3 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-200"
    >
      <ChevronLeft size={20} className="animate-pulse-slow" />
      <span>{label}</span>
    </motion.button>
  );
}
