import { FaBars, FaChartBar, FaUserGraduate, FaChalkboardTeacher, FaUserShield, FaCogs, FaCog } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarAdmin = ({ isExpanded, setIsExpanded }) => {
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

      {isExpanded && <div className="xl:px-[1.5rem] xl:py-[0.5rem] text-xl font-bold text-gray-200">Ge<span className="text-blue-500">Stage</span></div>}

      <nav className="flex flex-col space-y-2 mt-8">
        <Link to="/dashboardadmin" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/dashboardadmin')}`}>
          <FaChartBar className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Tableau de bord</span>}
        </Link>

        <Link to="/gestionstagiairesadmin" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/gestionstagiairesadmin')}`}>
          <FaUserGraduate className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Stagiaires</span>}
        </Link>


        <Link to="/gestionencadreursadmin" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/gestionencadreursadmin')}`}>
          <FaChalkboardTeacher className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Encadreurs</span>}
        </Link>

        <Link to="/gestionadminsadmin" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/gestionadminsadmin')}`}>
          <FaUserShield className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Administrateurs</span>}
        </Link>

        <Link to="/administrationgenerale" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/administrationgenerale')}`}>
          <FaCogs className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Administration Générale</span>}
        </Link>

        <Link to="/parametresadmin" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/parametresadmin')}`}>
          <FaCog className="text-gray-300 text-lg mr-3" />
          {isExpanded && <span className="text-gray-300">Paramètres</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
