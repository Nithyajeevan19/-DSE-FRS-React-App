// src/components/AttendanceMarkerModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "32px",
              maxWidth: "600px",
              width: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#f3f4f6",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "6px",
              }}
            >
              <X size={24} />
            </button>
            <div style={{
              marginBottom: "24px",
              borderBottom: "2px solid #e5e7eb",
              paddingBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}>
              <img
                src={student.photo}
                alt={student.name}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #818cf8",
                }}
              />
              <div>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
                  {student.name}
                </h2>
                <p style={{ fontSize: "14px", color: "#666", margin: "4px 0 0 0" }}>
                  ID: {student.id}
                </p>
              </div>
            </div>
            {/* This below part integrates WebcamFeed exactly as you asked */}
            <WebcamFeed
              onCapture={() => {
                if (onCapture) onCapture(student.id);
                onClose();
              }}
              onClose={onClose}
            />
            <div
              style={{
                background: "#dbeafe",
                borderLeft: "4px solid #3b82f6",
                padding: "16px",
                borderRadius: "4px",
                marginTop: "18px"
              }}
            >
              <p style={{ color: "#1e3a8a", fontWeight: "600", margin: 0 }}>
                📷 Click "Start Camera" → Position your face → Click "Mark & Capture"
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
