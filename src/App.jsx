import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClassList from './pages/ClassList';
import StudentAttendance from './pages/StudentAttendance';
import Placeholder from './pages/Placeholder';
import NotFound from './pages/NotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student-attendance" element={<ClassList />} />
        <Route path="/student-attendance/:classId" element={<StudentAttendance />} />
        <Route path="/staff-registration" element={<Placeholder title="Staff Registration" />} />
        <Route path="/staff-attendance" element={<Placeholder title="Staff Attendance" />} />
        <Route path="/student-registration" element={<Placeholder title="Student Registration" />} />
        <Route path="/detailed-report" element={<Placeholder title="Detailed Report" />} />
        <Route path="/duplicates" element={<Placeholder title="Duplicates" />} />
        <Route path="/logout" element={<Dashboard logout={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
