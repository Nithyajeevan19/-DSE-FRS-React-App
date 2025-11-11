import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClassList from './pages/ClassList';
import StudentAttendance from './pages/StudentAttendance';
import Placeholder from './pages/Placeholder';
import NotFound from './pages/NotFound';
import StudentRegistration from './pages/StudentRegistration';
import FacultyList from './pages/FacultyList';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/faculty" element={
          <ProtectedRoute requiredRole="faculty">
            <FacultyList />
          </ProtectedRoute>
        } />
        
        <Route path="/students" element={
          <ProtectedRoute requiredRole="student">
            <ClassList />
          </ProtectedRoute>
        } />
        
        <Route path="/student-attendance" element={<ClassList />} />
        <Route path="/student-attendance/:classId" element={<StudentAttendance />} />
        <Route path="/staff-registration" element={<Placeholder title="Staff Registration" />} />
        <Route path="/staff-attendance" element={<Placeholder title="Staff Attendance" />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/detailed-report" element={<Placeholder title="Detailed Report" />} />
        <Route path="/duplicates" element={<Placeholder title="Duplicates" />} />
        <Route path="/logout" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
