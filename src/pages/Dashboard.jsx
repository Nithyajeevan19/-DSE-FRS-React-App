// src/pages/Dashboard.jsx (CORRECTED for Role-Based Routing)
import { useAuth } from "../context/AuthContext";
import AdminDashboard from "./AdminDashboard"; // Assuming this is your admin view
import FacultyList from "./FacultyList";     // Using your existing faculty view component
import ClassList from "./ClassList";       // Using your existing student view component (Class selection)
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
    const { user } = useAuth();

    // If the user isn't logged in, redirect them. (This is also handled by ProtectedRoute)
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Direct user to the appropriate component based on their role
    if (user.role === 'admin') {
        return <AdminDashboard />;
    }
    if (user.role === 'faculty') {
        // Faculty lands on the list of faculty to manage attendance
        return <FacultyList />; 
    }
    if (user.role === 'student') {
        // Student might land on the class selection list (or a dedicated student-only view)
        return <ClassList />; 
    }

    // Fallback if the role exists but isn't handled
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <p className="text-xl text-red-500">Error: User role "{user.role}" not mapped to a view.</p>
        </div>
    );
}