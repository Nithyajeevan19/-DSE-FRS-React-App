import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';
import WebcamFeed from './WebcamFeed';

export default function FacultyAttendanceMarkerModal({
  faculty,
  isOpen,
  onClose,
  onCapture
}) {
  if (!faculty) return null;

  const handleCapture = () => {
    onCapture && onCapture(faculty.id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[9999] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 320, damping: 25 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border-2 border-indigo-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition z-10 shadow-lg"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Main Content */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Mark Attendance</h3>
                <p className="text-xs text-gray-500 mt-1">Position your face in the camera</p>
              </div>

              {/* Camera Feed */}
              <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-300">
                <WebcamFeed
                  onCapture={handleCapture}
                  onClose={onClose}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
