// src/pages/StudentAttendance.jsx (UPDATED for Persistence and Path)

import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ToggleButton from '../components/ToggleButton';
import StudentCard from '../components/StudentCard';
// ⚠️ PATH FIX: Changed from "../components/CameraFeed" to "./CameraFeed"
import CameraFeed from "./CameraFeed"; 
import { classes, students as studentsData } from '../data/mockData';
import { useEffect, useState, useMemo } from 'react'; // Added useMemo
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import SparkleOverlay from '../components/SparkleOverlay';
import Spinner from '../components/Spinner';
import { useAttendance } from '../context/AttendanceContext'; // NEW IMPORT

export default function StudentAttendance() {
    const { classId } = useParams();
    const [query, setQuery] = useState('');
    const [presentView, setPresentView] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showCamera, setShowCamera] = useState(false);
    
    const { getClassAttendance, updateStudentAttendance } = useAttendance(); 

    // --- Data Calculation using Persisted State ---
    const currentAttendance = useMemo(() => getClassAttendance(classId), [classId, getClassAttendance]);
    
    // Combine mock data with persisted status upon load
    const studentsWithStatus = useMemo(() => {
        return (studentsData[classId] || []).map(student => ({
            ...student,
            // Use the persisted status, default to false if no record exists
            present: currentAttendance[student.id] || false 
        }));
    }, [classId, currentAttendance]);


    // Simulation of data load complete
    useEffect(() => {
        setLoading(true);
        setTimeout(() => { 
            setLoading(false);
        }, 500);
    }, [classId]);


    // Handler now updates the global context
    const handleToggleAttend = (studentId) => {
        const currentStatus = currentAttendance[studentId] || false;
        const newStatus = !currentStatus;
        updateStudentAttendance(classId, studentId, newStatus);
    };

    // Camera Capture Handler remains similar, but uses the new context setter
    const handleCameraCapture = () => {
        const firstAbsent = studentsWithStatus.find(s => !s.present);
        if (firstAbsent) {
            updateStudentAttendance(classId, firstAbsent.id, true); // Mark as Present
            alert(`Attendance marked for ${firstAbsent.name} via camera simulation!`);
        } else {
            alert("All students are already marked present!");
        }
        setShowCamera(false); 
    };
    // ---------------------------------------------

    // Use the combined data for filtering
    const filtered = studentsWithStatus.filter(s =>
        s.name.toLowerCase().includes(query.toLowerCase()) || s.id.includes(query)
    ).filter(s => (presentView ? s.present : !s.present));

    const total = studentsWithStatus.length;
    const marked = studentsWithStatus.filter(s => s.present).length;
    const classObj = classes.find(c => String(c.id) === classId);

    return (
        <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 relative">
            <Header />
            <SparkleOverlay count={15}/>
            {/* ... motion.div for animation background ... */}
            <motion.main
                className="flex-1 flex flex-col items-center px-2 pt-6 pb-10 z-10 relative"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
            >
                <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl max-w-3xl w-full mx-auto px-8 py-6 relative z-20">
                    <div className="flex w-full justify-between items-center mb-4 px-2">
                        <span className="text-lg font-bold">
                            {classObj?.name || ''} Attendance:
                        </span>
                        <span className="font-mono text-blue-700 text-xl">
                            {marked}/{total}
                        </span>
                    </div>

                    {/* CAMERA TOGGLE BUTTON */}
                    <div className="mb-4 flex justify-center">
                        <button
                            onClick={() => setShowCamera(!showCamera)}
                            className={`flex items-center space-x-2 py-2 px-4 rounded-full font-semibold transition shadow-md ${showCamera ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'}`}
                        >
                            <Camera size={20} />
                            <span>{showCamera ? 'Close Camera' : 'Start Face Recognition'}</span>
                        </button>
                    </div>
                    
                    {/* CAMERA FEED DISPLAY */}
                    <AnimatePresence>
                    {showCamera && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto', padding: '16px' }}
                            exit={{ opacity: 0, height: 0, padding: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <CameraFeed onCapture={handleCameraCapture} />
                        </motion.div>
                    )}
                    </AnimatePresence>
                    
                    <ToggleButton
                        value={presentView}
                        onChange={setPresentView}
                        leftLabel="Absentees"
                        rightLabel="Presentees"
                    />
                    <SearchBar
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search Student"
                    />

                    {/* Loader */}
                    {loading ? (
                        <div className="flex py-16 justify-center"> <Spinner /> </div>
                    ) : (
                        <AnimatePresence>
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {filtered.map((s, i) => (
                                    <motion.div
                                        key={s.id}
                                        initial={{ opacity: 0, y: 25, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.92 }}
                                        transition={{ delay: i * 0.08, type: "spring" }}
                                    >
                                        <StudentCard
                                            student={s}
                                            onClick={() => handleToggleAttend(s.id)}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </motion.main>
            <footer className="text-right text-xs text-gray-400 py-2 px-4 z-20">
                V 1.0.6
            </footer>
        </div>
    );
}