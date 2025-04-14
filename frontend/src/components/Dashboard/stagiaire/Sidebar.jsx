import { Link, useLocation } from 'react-router-dom';
import { FaChartLine, FaCalendarAlt, FaTasks, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-blue-100 text-blue-600' : 'text-gray-600';

  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="p-6 text-xl font-bold text-blue-600">Mon Stage</div>
      <nav className="flex flex-col space-y-2 mt-8">
        <Link to="/dashboardstagiaire" className={`flex items-center px-6 py-3 hover:bg-blue-50 ${isActive('/dashboard-stagiaire')}`}>
          <FaChartLine className="mr-3" /> Dashboard
        </Link>
        <Link to="/monstage" className={`flex items-center px-6 py-3 hover:bg-blue-50 ${isActive('/mon-stage')}`}>
          <FaTasks className="mr-3" /> Mon Stage
        </Link>
        <Link to="/calendrierstagiaire" className={`flex items-center px-6 py-3 hover:bg-blue-50 ${isActive('/calendrier')}`}>
          <FaCalendarAlt className="mr-3" /> Calendrier
        </Link>
        <Link to="/profilstagiaire" className={`flex items-center px-6 py-3 hover:bg-blue-50 ${isActive('/profil')}`}>
          <FaUser className="mr-3" /> Profil
        </Link>
        <Link to="/parametresstagiaire" className={`flex items-center px-6 py-3 hover:bg-blue-50 ${isActive('/parametres')}`}>
          <FaCog className="mr-3" /> Paramètres
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
