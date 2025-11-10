import { MoreVertical } from 'lucide-react';

export default function StudentCard({ student, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl shadow p-4 flex flex-col items-center cursor-pointer bg-gray-50 hover:bg-purple-100 transition-all border-2 
        ${student.present ? 'border-green-400 bg-green-50' : 'border-transparent'}`}
      title={student.name}
    >
      <img
        src={student.photo}
        alt={student.name}
        className="rounded-full w-20 h-20 object-cover border mb-2"
      />
      <div className="flex items-center w-full justify-between">
        <div>
          <div className="text-xs text-gray-400 font-mono">{student.id}</div>
          <div className="font-semibold text-sm truncate w-20">{student.name}</div>
        </div>
        <MoreVertical size={20} className="text-gray-400" />
      </div>
    </div>
  );
}
