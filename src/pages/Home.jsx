import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10">Welcome to Smart Attendance System</h1>
      <div className="flex gap-12">
        <div className="home-card cursor-pointer text-center shadow-lg rounded-2xl p-8 bg-white"
          onClick={() => navigate("/students")}>
          <img src="/images/student.png" alt="Student" className="w-24 h-24 mx-auto mb-3" />
          <h2 className="font-semibold text-xl">Students</h2>
          <p>View and manage student attendance</p>
        </div>
        <div className="home-card cursor-pointer text-center shadow-lg rounded-2xl p-8 bg-white"
          onClick={() => navigate("/faculty")}>
          <img src="/images/faculty.png" alt="Faculty" className="w-24 h-24 mx-auto mb-3" />
          <h2 className="font-semibold text-xl">Faculty</h2>
          <p>Monitor faculty attendance and reports</p>
        </div>
        <div className="home-card cursor-pointer text-center shadow-lg rounded-2xl p-8 bg-white"
          onClick={() => navigate("/admin")}>
          <img src="/images/admin.png" alt="Admin" className="w-24 h-24 mx-auto mb-3" />
          <h2 className="font-semibold text-xl">Admin</h2>
          <p>Admin dashboard & settings</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
