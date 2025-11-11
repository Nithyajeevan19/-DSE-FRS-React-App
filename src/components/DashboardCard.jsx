import { UserPlus, UserCheck, UserCog, Users, FileText, Copy, Power } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const icons = {
  UserPlus,
  UserCheck,
  UserCog,
  Users,
  FileText,
  Copy,
  Power,
};

export default function DashboardCard({ card }) {
  const IconComponent = icons[card.icon];
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.08, boxShadow: "0 8px 30px rgba(72,68,220,0.13)" }}
      whileTap={{ scale: 0.96 }}
      className={`cursor-pointer rounded-2xl shadow-lg backdrop-blur bg-white/70 flex flex-col items-center ${card.bgColor} p-8 border border-indigo-100`}
      onClick={() => navigate(card.route)}
      aria-label={card.title}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6, delay: 0.25 }}
      >
        <IconComponent size={54} className="mb-2 text-indigo-700 drop-shadow" />
      </motion.div>
      <span className="mt-4 text-lg font-extrabold text-center tracking-wide">{card.title}</span>
    </motion.div>
  );
}
