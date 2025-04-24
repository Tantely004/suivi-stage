import { FaBars, FaChartBar, FaUserGraduate, FaLightbulb, FaCalendarAlt, FaCog, FaBell } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarEncadreur = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-black' : 'text-black';

  return (
    <div className="h-full flex flex-col poppins-light">
      <button 
        className="p-4 focus:outline-none text-gray-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars />
      </button>

      {isExpanded && <div className="xl:px-[1.5rem] xl:py-[0.25rem] xl:text-[1.40rem] font-bold text-gray-200">Ge<span className="text-blue-500">Stage</span></div>}

      <nav className="flex flex-col space-y-2 mt-8">
        <Link to="/dashboardencadreur" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/dashboardencadrant')}`}>
          <FaChartBar className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Tableau de bord</span>}
        </Link>
        <Link to="/gestionstagiaires" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/gestionstagiaires')}`}>
          <FaUserGraduate className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Stagiaires</span>}
        </Link>
        <Link to="/analyseia" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/analyseetrecommendationia')}`}>
          <FaLightbulb className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Analyse IA</span>}
        </Link>
        <Link to="/calendrierencadreur" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/calendrierencadrant')}`}>
          <FaCalendarAlt className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Calendrier</span>}
        </Link>
        <Link to="/notificationsencadreur" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/notificationsencadrant')}`}>
          <FaBell className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Notifications</span>}
        </Link>
        <Link to="/parametresencadreur" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/parametresencadrant')}`}>
          <FaCog className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Paramètres</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SidebarEncadreur;
