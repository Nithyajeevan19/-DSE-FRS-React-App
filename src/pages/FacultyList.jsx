// src/pages/FacultyList.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FacultyCard from '../components/FacultyCard';
import { faculty } from '../data/mockData';
import { motion } from 'framer-motion';

export default function FacultyList() {
  const [query, setQuery] = useState('');
  
  const filteredFaculty = faculty.filter(
    f => f.name.toLowerCase().includes(query.toLowerCase()) || f.dept.toLowerCase().includes(query.toLowerCase())
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
        <h2 className="text-3xl font-extrabold mb-8 text-gray-700">
          Faculty Attendance Management
        </h2>
        
        <SearchBar
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search faculty by name or department"
          className="max-w-xl mb-10"
        />

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <FacultyCard faculty={f} />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-xl mt-12">No faculty found matching "{query}".</p>
          )}
        </div>
      </motion.main>
    </div>
  );
}