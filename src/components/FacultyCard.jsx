// src/components/FacultyCard.jsx
import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function FacultyCard({ faculty }) {
  const [showDays, setShowDays] = useState(false);
  
  // Placeholder: In a real app, this would update state/API
  const handleMarkAttendance = (day) => {
    // Logic to mark attendance for faculty.id on 'day'
    alert(`Attendance marked for ${faculty.name} on ${day}`);
    setShowDays(false);
  };

  return (
    <motion.div
      className="w-80 bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center transition-all hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={faculty.photo}
        alt={faculty.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300 mb-3"
      />
      <h3 className="text-lg font-bold truncate w-full text-center">{faculty.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{faculty.dept || 'Staff'}</p>

      <button
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
        onClick={() => setShowDays(!showDays)}
      >
        Mark Attendance
      </button>

      {showDays && (
        <div className="mt-4 w-full p-3 border border-indigo-200 rounded-lg bg-indigo-50">
          <p className="font-semibold text-sm mb-2 text-gray-700">Choose Day</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {daysOfWeek.map(day => (
              <button
                key={day}
                onClick={() => handleMarkAttendance(day)}
                className="px-3 py-1 text-xs font-medium bg-white text-indigo-700 border border-indigo-300 rounded-full hover:bg-indigo-700 hover:text-white transition duration-150"
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}