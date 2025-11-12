import React, { useState } from 'react';
import { Camera, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FacultyAttendanceMarkerModal from './FacultyAttendanceMarkerModal';
import FacultyProfileModal from './FacultyProfileModal';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function FacultyCard({
  faculty,
  getFacultyHistory = () => [] // use fallback here for extra safety!
}) {
  const [showDays, setShowDays] = useState(false);
  const [modalDay, setModalDay] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleMarkAttendance = (day) => {
    setModalDay(day);
    setShowDays(false);
  };

  const handleMarkConfirmed = (facultyId, day) => {
    alert(`Attendance marked with camera for ${faculty.name} on ${day}`);
    setModalDay(null);
  };

  const handleShowProfile = () => setShowProfileModal(true);
  const handleCloseProfile = () => setShowProfileModal(false);

  return (
    <motion.div
      className="w-80 bg-white p-6 rounded-2xl shadow-xl border border-indigo-100 flex flex-col items-center transition-all hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar triggers profile modal */}
      <div
        className="relative w-24 h-24 mb-2 mx-auto group cursor-pointer"
        title="View faculty profile & analysis"
        onClick={handleShowProfile}
      >
        <img
          src={faculty.photo}
          alt={faculty.name}
          className="rounded-full w-full h-full object-cover border-4 border-indigo-400 shadow-lg transition-all group-hover:ring-4 group-hover:ring-purple-200"
        />
        <span className="absolute -bottom-1 -right-1 bg-white border-2 border-indigo-400 p-1 rounded-full shadow">
          <BarChart2 size={20} className="text-purple-600" />
        </span>
      </div>
      <h3
        className="text-lg font-bold truncate w-full text-center cursor-pointer hover:text-indigo-700 transition"
        onClick={handleShowProfile}
      >
        {faculty.name}
      </h3>
      <p className="text-xs text-indigo-500 mb-1">{faculty.dept || 'Staff'}</p>
      <p className="text-xs text-gray-400 mb-4">ID: {faculty.id}</p>

      {/* Mark Attendance */}
      <button
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md flex items-center justify-center gap-2"
        onClick={() => setShowDays(!showDays)}
      >
        <Camera size={18} />
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
      {/* CAMERA MODAL FOR ATTENDANCE */}
      <FacultyAttendanceMarkerModal
        faculty={faculty}
        day={modalDay}
        isOpen={!!modalDay}
        onClose={() => setModalDay(null)}
        onCapture={handleMarkConfirmed}
      />
      {/* PROFILE/ANALYSIS MODAL */}
      <FacultyProfileModal
        faculty={faculty}
        isOpen={showProfileModal}
        onClose={handleCloseProfile}
        onMarkAttendance={() => setShowDays(true)}
        getFacultyHistory={getFacultyHistory} // <- Always passed, always safe!
      />
    </motion.div>
  );
}
