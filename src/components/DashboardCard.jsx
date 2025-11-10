import { UserPlus, UserCheck, UserCog, Users, FileText, Copy, Power } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <div
      className={`cursor-pointer rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center ${card.bgColor} p-6`}
      onClick={() => navigate(card.route)}
      aria-label={card.title}
    >
      <IconComponent size={48} className="mb-2" />
      <span className="mt-2 text-base font-semibold text-center">{card.title}</span>
    </div>
  );
}
