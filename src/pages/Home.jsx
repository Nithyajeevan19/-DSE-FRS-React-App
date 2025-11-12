import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, ArrowRight, LogIn, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col">
      {/* Buttons Top-Right */}
      <div className="absolute top-0 right-0 p-6 flex gap-5 z-50">
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(99,102,241,0.20)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 px-7 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-all"
        >
          <LogIn size={20} />
          Log In
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(16,185,129,0.17)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/register")}
          className="flex items-center gap-2 px-7 py-2 rounded-xl bg-gradient-to-r from-green-400 via-teal-400 to-cyan-500 text-white font-bold text-lg shadow-lg hover:from-green-600 hover:to-cyan-700 transition-all"
        >
          <UserPlus size={20} />
          Register
        </motion.button>
      </div>

      {/* Main Central Content */}
      <div className="flex flex-col flex-1 items-center justify-center pt-32 pb-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 text-center"
        >
          Welcome to Smart Attendance System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg mb-12 text-center max-w-2xl"
        >
          Seamlessly manage student and faculty attendance with modern technology and intuitive design.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-6">
          {/* Student Card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/students")}
            className="group cursor-pointer bg-white rounded-3xl shadow-2xl p-8 w-80 flex flex-col items-center text-center transition-all duration-300 border-2 border-transparent hover:border-indigo-400"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-6 mb-6 shadow-lg group-hover:shadow-indigo-400/50 transition-shadow">
              <GraduationCap size={56} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Students</h2>
            <p className="text-gray-600 mb-6">
              View and manage student attendance with ease
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Faculty Card */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/faculty")}
            className="group cursor-pointer bg-white rounded-3xl shadow-2xl p-8 w-80 flex flex-col items-center text-center transition-all duration-300 border-2 border-transparent hover:border-pink-400"
          >
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-6 mb-6 shadow-lg group-hover:shadow-pink-400/50 transition-shadow">
              <Users size={56} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Faculty</h2>
            <p className="text-gray-600 mb-6">
              Monitor faculty attendance and generate reports
            </p>
            <div className="flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-4 transition-all">
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 text-gray-500 text-sm text-center"
        >
          Powered by modern AI & cloud technology
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
