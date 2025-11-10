import Header from '../components/Header';
import ClassCard from '../components/ClassCard';
import SearchBar from '../components/SearchBar';
import { classes } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ClassList() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const filtered = classes.filter(
    c => c.name.toLowerCase().includes(query.toLowerCase()) || String(c.total).includes(query)
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-2 py-6">
        <h2 className="text-xl font-bold mb-4">Student Attendance</h2>
        <SearchBar
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by class name"
        />
        <div className="w-full max-w-md space-y-4 mt-6">
          {filtered.map(cls => (
            <ClassCard
              key={cls.id}
              cls={cls}
              onClick={() => navigate(`/student-attendance/${cls.id}`)}
            />
          ))}
        </div>
      </main>
      <footer className="text-right text-xs text-gray-400 py-2 px-4">
        V 1.0.6
      </footer>
    </div>
  );
}
