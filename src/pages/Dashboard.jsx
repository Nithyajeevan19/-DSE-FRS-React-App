import Header from '../components/Header';
import DashboardCard from '../components/DashboardCard';
import { dashboardCards } from '../data/mockData';

export default function Dashboard({ logout }) {
  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-full max-w-4xl">
          {dashboardCards.map(card => (
            <DashboardCard key={card.id} card={card} />
          ))}
        </div>
      </main>
      <div className="absolute left-0 bottom-0 w-40 h-40 rounded-full bg-gradient-to-br from-blue-300 to-purple-200 opacity-60 -z-10" />
      <footer className="text-right text-xs text-gray-400 py-2 px-4">
        V 1.0.6 {logout && <span className="text-green-600 font-semibold ml-4">You are logged out.</span>}
      </footer>
    </div>
  );
}
