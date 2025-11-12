import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import StudentCard from '../components/StudentCard';
import BackButton from '../components/BackButton';
import { students } from '../data/mockData';
import { motion } from 'framer-motion';

// Function outside component (no hooks)
function getStudentHistory(studentId) {
  return [
    { date: "2025-11-01", status: "Present" },
    { date: "2025-11-02", status: "Absent" },
    { date: "2025-11-03", status: "Present" },
    { date: "2025-11-04", status: "Present" }
  ];
}

export default function StudentList() {
  const [query, setQuery] = useState('');

  const filteredStudents = students.filter(
    s =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.dept.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <motion.main
        className="flex-1 flex flex-col items-center px-4 py-10 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 0.15, bounce: 0.45 }}
      >
        {/* Back Button */}
        <div className="w-full max-w-7xl mb-8 flex justify-start">
          <BackButton to="/" label="← Back to Home" />
        </div>

        <h2 className="text-3xl font-extrabold mb-8 text-gray-700">
          Student Attendance Management
        </h2>

        <SearchBar
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search students by name or department"
          className="max-w-xl mb-10"
        />

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <StudentCard
                  student={s}
                  getStudentHistory={getStudentHistory}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-xl mt-12">
              No students found matching "{query}".
            </p>
          )}
        </div>
      </motion.main>
    </div>
  );
}
