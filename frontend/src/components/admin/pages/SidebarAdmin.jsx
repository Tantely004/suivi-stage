import { FaBars, FaChartBar, FaUsers, FaCogs, FaFileExport, FaCog } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarAdmin = ({ isExpanded, setIsExpanded }) => {
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
        <Link to="/dashboardadmin" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/dashboardadmin')}`}>
          <FaChartBar className="text-black text-lg mr-3" />
          {isExpanded && <span>Dashboard</span>}
        </Link>
        <Link to="/gestionutilisateursadmin" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/gestionutilisateurs')}`}>
          <FaUsers className="text-black text-lg mr-3" />
          {isExpanded && <span>Utilisateurs</span>}
        </Link>
        <Link to="/gestionsystemeadmin" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/gestionsysteme')}`}>
          <FaCogs className="text-black text-lg mr-3" />
          {isExpanded && <span>Système</span>}
        </Link>
        <Link to="/exportrapportsadmin" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/exportetrapports')}`}>
          <FaFileExport className="text-black text-lg mr-3" />
          {isExpanded && <span>Export & Rapports</span>}
        </Link>
        <Link to="/parametresadmin" className={`flex items-center px-4 py-3 hover:bg-gray-100 ${isActive('/parametresadmin')}`}>
          <FaCog className="text-black text-lg mr-3" />
          {isExpanded && <span>Paramètres</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
