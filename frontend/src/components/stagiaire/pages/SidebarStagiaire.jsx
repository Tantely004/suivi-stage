import { FaBars, FaChartLine, FaTasks, FaCalendarAlt, FaUser, FaCog } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarStagiaire = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-black' : 'text-black';

  return (
    <div className="h-full flex flex-col poppins-light">
      <button 
        className="p-4 focus:outline-none bg-transparent text-gray-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars />
      </button>

      {isExpanded && <div className="xl:px-[1.5rem] xl:py-[0.25rem] xl:text-[1.40rem] text-gray-200 poppins-title">Ge<span className="text-blue-500">Stage</span></div>}

      <nav className="flex flex-col space-y-2 mt-8">
        <Link to="/dashboardstagiaire" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/dashboard-stagiaire')}`}>
          <FaChartLine className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className='text-gray-300'>Tableau de bord</span>}
        </Link>
        <Link to="/monstage" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/mon-stage')}`}>
          <FaTasks className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className='text-gray-300'>Mon Stage</span>}
        </Link>
        <Link to="/calendrierstagiaire" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/calendrier')}`}>
          <FaCalendarAlt className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className='text-gray-300'>Calendrier</span>}
        </Link>
        <Link to="/profilstagiaire" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/profil')}`}>
          <FaUser className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className='text-gray-300'>Profil</span>}
        </Link>
        <Link to="/parametresstagiaire" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/parametres')}`}>
          <FaCog className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className='text-gray-300'>Paramètres</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SidebarStagiaire;
