import { FaBars, FaChartLine, FaTasks, FaCalendarAlt, FaUser, FaCog } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarStagiaire = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-gray-200 text-black' : 'text-black';

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
        <Link to="/dashboardstagiaire" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/dashboard-stagiaire')}`}>
          <FaChartLine className="text-black text-lg mr-3" />
          {isExpanded && <span>Dashboard</span>}
        </Link>
        <Link to="/monstage" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/mon-stage')}`}>
          <FaTasks className="text-black text-lg mr-3" />
          {isExpanded && <span>Mon Stage</span>}
        </Link>
        <Link to="/calendrierstagiaire" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/calendrier')}`}>
          <FaCalendarAlt className="text-black text-lg mr-3" />
          {isExpanded && <span>Calendrier</span>}
        </Link>
        <Link to="/profilstagiaire" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/profil')}`}>
          <FaUser className="text-black text-lg mr-3" />
          {isExpanded && <span>Profil</span>}
        </Link>
        <Link to="/parametresstagiaire" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/parametres')}`}>
          <FaCog className="text-black text-lg mr-3" />
          {isExpanded && <span>Paramètres</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SidebarStagiaire;
