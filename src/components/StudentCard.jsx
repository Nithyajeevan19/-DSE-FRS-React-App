// src/components/StudentCard.jsx (SUPERB UI)
import { MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentCard({ student, onClick }) {
    const isPresent = student.present;
    
    const cardVariants = {
        present: { borderColor: '#10B981', backgroundColor: '#F0FFF4', boxShadow: '0 4px 10px rgba(16, 185, 129, 0.4)' }, // Green
        absent: { borderColor: '#E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)' } // Default/Gray
    };

    return (
        <motion.div
            onClick={onClick}
            className={`rounded-2xl p-4 flex flex-col items-center cursor-pointer transition-all duration-200 border-4`}
            initial={false}
            animate={isPresent ? "present" : "absent"}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: isPresent ? cardVariants.present.boxShadow : '0 6px 15px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            title={student.name}
        >
            <div className={`relative w-24 h-24 mb-2`}>
                <img
                    src={student.photo}
                    alt={student.name}
                    className="rounded-full w-full h-full object-cover border-4 border-white shadow-inner"
                />
                {/* Status Indicator Badge */}
                <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${isPresent ? 'bg-green-500 shadow-lg' : 'bg-red-500'}`} />
            </div>

            <div className="flex items-center w-full justify-between mt-2">
                <div className="text-left flex-1 min-w-0 pr-2">
                    <div className="text-xs text-gray-500 font-mono tracking-wider">{student.id}</div>
                    <div className="font-extrabold text-base truncate w-full text-gray-800 leading-tight">{student.name}</div>
                </div>
                {/* Status-dependent button/icon */}
                <div className={`p-1 rounded-full ${isPresent ? 'text-green-600 bg-green-100' : 'text-gray-500 bg-gray-100'}`}>
                    <MoreVertical size={20} />
                </div>
            </div>
        </motion.div>
    );
}