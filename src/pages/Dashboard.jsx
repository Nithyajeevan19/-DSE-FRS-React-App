// src/pages/Dashboard.jsx (FIXED CODE)

import { useAuth } from "../context/AuthContext";
// ❌ REMOVED: import FacultyDashboard from "./FacultyDashboard";
// ❌ REMOVED: import StudentDashboard from "./StudentDashboard";
// The following imports must be present in your /pages folder:
import AdminDashboard from "./AdminDashboard";
import FacultyList from "./FacultyList";
import ClassList from "./ClassList";
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role === 'admin') {
        return <AdminDashboard />;
    }
    if (user.role === 'faculty') {
        return <FacultyList />; 
    }
    if (user.role === 'student') {
        return <ClassList />; 
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <p className="text-xl text-red-500">Welcome, {user.email}. Role not mapped to a view.</p>
        </div>
    );
}