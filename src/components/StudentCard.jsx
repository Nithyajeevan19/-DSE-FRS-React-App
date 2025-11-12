// src/components/StudentCard.jsx
import { MoreVertical, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentCard({ student, onViewProfile, onMarkAttendance }) {
    const isPresent = student.present;
    
    const cardVariants = {
        present: { borderColor: '#10B981', backgroundColor: '#F0FFF4', boxShadow: '0 4px 10px rgba(16, 185, 129, 0.4)' },
        absent: { borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)' }
    };

    return (
        <motion.div
            className={`rounded-2xl p-4 flex flex-col items-center cursor-pointer transition-all duration-200 border-4`}
            initial={false}
            animate={isPresent ? "present" : "absent"}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: isPresent ? cardVariants.present.boxShadow : '0 6px 15px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            title={student.name}
        >
            {/* Card Header - Click to view profile */}
            <div 
                onClick={() => onViewProfile(student)}
                className="w-full cursor-pointer"
            >
                <div className={`relative w-24 h-24 mb-2 mx-auto`}>
                    <img
                        src={student.photo}
                        alt={student.name}
                        className="rounded-full w-full h-full object-cover border-4 border-white shadow-inner"
                    />
                    <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${isPresent ? 'bg-green-500 shadow-lg' : 'bg-red-500'}`} />
                </div>

                <div className="flex items-center w-full justify-between mt-2">
                    <div className="text-left flex-1 min-w-0 pr-2">
                        <div className="text-xs text-gray-500 font-mono tracking-wider">{student.id}</div>
                        <div className="font-extrabold text-base truncate w-full text-gray-800 leading-tight">{student.name}</div>
                    </div>
                    <div className={`p-1 rounded-full ${isPresent ? 'text-green-600 bg-green-100' : 'text-gray-500 bg-gray-100'}`}>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </div>

            {/* Mark Attendance Button */}
            <motion.button
                onClick={(e) => {
                    e.stopPropagation();
                    onMarkAttendance(student);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 text-sm"
            >
                <Camera size={16} />
                Mark Attendance
            </motion.button>
        </motion.div>
    );
}
