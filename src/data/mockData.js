export const classes = [
  {
    id: 1,
    name: "Class-VI Section A",
    total: 30,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Class-VII Section A",
    total: 25,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    name: "Class-VII Section B",
    total: 0,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 4,
    name: "Class-VIII Section A",
    total: 34,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  }
];

export const dashboardCards = [
  { id: 1, title: "Staff Registration", icon: "UserPlus", bgColor: "bg-blue-200", route: "/staff-registration" },
  { id: 2, title: "Staff Attendance", icon: "UserCheck", bgColor: "bg-blue-300", route: "/staff-attendance" },
  { id: 3, title: "Student Registration", icon: "UserCog", bgColor: "bg-purple-200", route: "/student-registration" },
  { id: 4, title: "Student Attendance", icon: "Users", bgColor: "bg-purple-300", route: "/student-attendance" },
  { id: 5, title: "Detailed Report", icon: "FileText", bgColor: "bg-cyan-200", route: "/detailed-report" },
  { id: 6, title: "Duplicates", icon: "Copy", bgColor: "bg-purple-300", route: "/duplicates" },
  { id: 7, title: "Log Out", icon: "Power", bgColor: "bg-green-200", route: "/logout" }
];

export const students = {
  1: [
    { id: '124529', name: "BANDARI AKSHAY", photo: "https://i.pravatar.cc/150?img=1", present: false },
    { id: '201385', name: "BANDELA DEEPAK", photo: "https://i.pravatar.cc/150?img=2", present: false },
    { id: '200477', name: "BHUSHPAKALA RAVI", photo: "https://i.pravatar.cc/150?img=3", present: false },
    // ...add at least 9 students for demo, use pravatar.cc for fake pics
  ]
  // Add similar arrays for classes 2, 3, 4 as demo!
};
