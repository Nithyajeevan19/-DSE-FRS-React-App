import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';
import WebcamFeed from './WebcamFeed';

export default function AttendanceMarkerModal({ student, isOpen, onClose, onCapture }) {
  if (!student) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-blue-800/80 via-black/80 to-purple-800/90 flex items-center justify-center p-4 z-50 backdrop-blur"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 32 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl p-0 overflow-hidden border-2 border-indigo-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white/80 hover:bg-indigo-200 text-indigo-800 font-bold rounded-lg p-2 shadow transition"
              aria-label="Close"
            >
              <X size={26} />
            </button>
            {/* Header */}
            <div className="flex items-center gap-4 border-b-2 border-indigo-100 px-8 pt-7 pb-4 bg-gradient-to-r from-white via-indigo-50 to-indigo-100">
              <div className="flex-shrink-0 relative">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
                />
                <span
                  className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${
                    student.present ? "bg-green-500 shadow-md" : "bg-red-500"
                  }`}
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-indigo-900">
                  {student.name}
                </h2>
                <div className="text-xs font-mono text-gray-600">
                  ID: {student.id}
                </div>
                {/* Attendance status indicator */}
                <div className="mt-1 flex items-center gap-1">
                  <span className={`inline-block w-2 h-2 rounded-full ${student.present ? "bg-green-500" : "bg-gray-400"}`} />
                  <span className={`text-xs font-bold uppercase ${student.present ? "text-green-600" : "text-gray-500"}`}>
                    {student.present ? "Present" : "Absent"}
                  </span>
                </div>
              </div>
            </div>
            {/* WebcamFeed Section */}
            <div className="px-8 py-7 flex flex-col items-center">
              <WebcamFeed
                onCapture={() => {
                  if (onCapture) onCapture(student.id);
                  onClose();
                }}
                onClose={onClose}
              />
              <div className="w-full mt-6 bg-blue-50/90 border-l-4 border-blue-400 shadow-inner rounded-lg px-5 py-3 text-blue-900 font-semibold flex items-center gap-2">
                <Camera size={19} className="text-blue-500" />
                <span>
                  Click <b>Start Camera</b> → Position face → <b>Mark &amp; Capture</b>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
