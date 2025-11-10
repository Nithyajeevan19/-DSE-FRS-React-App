import { GraduationCap, ChevronRight } from 'lucide-react';

export default function ClassCard({ cls, onClick }) {
  return (
    <div
      className={`flex items-center rounded-xl ${cls.bgColor} p-4 shadow cursor-pointer hover:scale-105 transition-all`}
      onClick={onClick}
    >
      <span className={`rounded-full p-3 ${cls.iconColor} bg-white shadow mr-4`}>
        <GraduationCap size={28} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500">Class</div>
        <div className="text-lg font-bold truncate">{cls.name}</div>
        <div className="text-xs text-gray-500">Total</div>
        <div className="text-blue-600 font-semibold">{cls.total}</div>
      </div>
      <ChevronRight size={24} className="ml-3 text-gray-400" />
    </div>
  );
}
