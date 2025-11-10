import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ToggleButton from '../components/ToggleButton';
import StudentCard from '../components/StudentCard';
import { classes, students as studentsData } from '../data/mockData';
import { useEffect, useState } from 'react';
import { ArrowLeft, RefreshCw, Camera, Users, Smartphone } from 'lucide-react';

export default function StudentAttendance() {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [presentView, setPresentView] = useState(false); // false: Absentees, true: Presentees
  const [query, setQuery] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Clone students to enable local attendance tracking
    setStudents((studentsData[classId] || []).map(s => ({ ...s })));
  }, [classId]);

  // Filter by search and toggle view
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.id.includes(query)
  ).filter(s => (presentView ? s.present : !s.present));

  const total = students.length;
  const marked = students.filter(s => s.present).length;

  const handleToggleAttend = (id) => {
    setStudents(list =>
      list.map(s => s.id === id ? { ...s, present: !s.present } : s)
    );
  };

  const classObj = classes.find(c => String(c.id) === classId);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white flex items-center justify-between px-4 py-3">
        <button onClick={() => navigate(-1)} aria-label="Back">
          <ArrowLeft size={28} />
        </button>
        <h2 className="font-bold text-lg flex-1 text-center mr-8">Student Attendance</h2>
        <div className="flex items-center space-x-2">
          <RefreshCw size={24} className="cursor-pointer" />
          <Camera size={24} className="cursor-pointer" />
          <Users size={24} className="cursor-pointer" />
          <Smartphone size={24} className="cursor-pointer" />
        </div>
      </div>
      <main className="flex-1 flex flex-col items-center px-2 py-4">
        <div className="flex w-full max-w-2xl justify-between items-center mb-2 px-2">
          <span className="text-base font-bold">
            {classObj?.name || ''} Attendance:
          </span>
          <span className="font-mono text-blue-700">
            {marked}/{total}
          </span>
        </div>
        <ToggleButton
          value={presentView}
          onChange={setPresentView}
          leftLabel="Absentees"
          rightLabel="Presentees"
        />
        <SearchBar
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search Student"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full max-w-3xl">
          {filtered.map(s => (
            <StudentCard
              key={s.id}
              student={s}
              onClick={() => handleToggleAttend(s.id)}
            />
          ))}
        </div>
      </main>
      <footer className="text-right text-xs text-gray-400 py-2 px-4">V 1.0.6</footer>
    </div>
  );
}
