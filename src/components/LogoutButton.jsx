// src/components/LogoutButton.jsx
import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton({ extraClass = "" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded-xl shadow transition ${extraClass}`}
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}
