// src/context/AttendanceContext.jsx

import React, { createContext, useContext, useState, useEffect } from "react";

const AttendanceContext = createContext();
const STORAGE_KEY = "dailyAttendanceRecords";

// Helper function to get the current date in YYYY-MM-DD format
const getTodayDate = () => new Date().toISOString().slice(0, 10);

export function AttendanceProvider({ children }) {
    const [records, setRecords] = useState(() => {
        // Initialize state by loading records from localStorage
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    });

    // Effect to save records to localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }, [records]);

    /**
     * Retrieves the attendance status for a specific class on a specific day.
     * @param {string} classId - The ID of the class (e.g., '1', '2').
     * @param {string} date - The date (YYYY-MM-DD), defaults to today.
     * @returns {Object} A map where studentId is the key and true/false is the status.
     */
    const getClassAttendance = (classId, date = getTodayDate()) => {
        // Use a combined key: 'YYYY-MM-DD-classId'
        const key = `${date}-${classId}`;
        return records[key] || {};
    };

    /**
     * Updates the attendance status for a single student.
     * @param {string} classId - The ID of the class.
     * @param {string} studentId - The ID of the student.
     * @param {boolean} status - True for Present, False for Absent.
     * @param {string} date - The date (YYYY-MM-DD), defaults to today.
     */
    const updateStudentAttendance = (classId, studentId, status, date = getTodayDate()) => {
        const key = `${date}-${classId}`;

        setRecords(prevRecords => {
            const currentClassRecords = prevRecords[key] || {};
            
            // 1. Create a deep copy of the previous state
            const newRecords = { ...prevRecords };
            
            // 2. Update the specific student's status
            newRecords[key] = {
                ...currentClassRecords,
                [studentId]: status,
            };

            return newRecords;
        });
    };
    
    // Placeholder for fetching historical data (future enhancement)
    const getStudentHistory = (studentId) => {
        const history = [];
        // In a real app, this would iterate over API data.
        // For mock data, we can iterate over the records state:
        for (const key in records) {
            const [date, clsId] = key.split('-');
            if (records[key][studentId] !== undefined) {
                history.push({
                    date: date,
                    status: records[key][studentId] ? 'Present' : 'Absent',
                    classId: clsId
                });
            }
        }
        return history;
    };


    const contextValue = {
        getClassAttendance,
        updateStudentAttendance,
        getStudentHistory, // For the detailed profile drawer
        getTodayDate,
    };

    return (
        <AttendanceContext.Provider value={contextValue}>
            {children}
        </AttendanceContext.Provider>
    );
}

export function useAttendance() {
    return useContext(AttendanceContext);
}