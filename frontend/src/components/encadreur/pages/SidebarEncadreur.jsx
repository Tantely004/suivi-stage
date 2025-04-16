import { FaBars, FaChartBar, FaUserGraduate, FaLightbulb, FaCalendarAlt, FaCog, FaBell } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarEncadreur = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-black' : 'text-black';

  return (
    <div className="h-full flex flex-col poppins-light">
      <button 
        className="p-4 focus:outline-none text-black"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars />
      </button>

      {isExpanded && <div className="p-6 text-xl font-bold text-black">Ge<span className="text-blue-700">Stage</span></div>}

      <nav className="flex flex-col space-y-2 mt-8">
        <Link to="/dashboardencadreur" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/dashboardencadrant')}`}>
          <FaChartBar className="text-black text-lg mr-3" />
          {isExpanded && <span>Dashboard</span>}
        </Link>
        <Link to="/gestionstagiaires" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/gestionstagiaires')}`}>
          <FaUserGraduate className="text-black text-lg mr-3" />
          {isExpanded && <span>Stagiaires</span>}
        </Link>
        <Link to="/analyseia" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/analyseetrecommendationia')}`}>
          <FaLightbulb className="text-black text-lg mr-3" />
          {isExpanded && <span>Analyse IA</span>}
        </Link>
        <Link to="/calendrierencadreur" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/calendrierencadrant')}`}>
          <FaCalendarAlt className="text-black text-lg mr-3" />
          {isExpanded && <span>Calendrier</span>}
        </Link>
        <Link to="/notificationsencadreur" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/notificationsencadrant')}`}>
          <FaBell className="text-black text-lg mr-3" />
          {isExpanded && <span>Notifications</span>}
        </Link>
        <Link to="/parametresencadreur" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/parametresencadrant')}`}>
          <FaCog className="text-black text-lg mr-3" />
          {isExpanded && <span>Paramètres</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SidebarEncadreur;
