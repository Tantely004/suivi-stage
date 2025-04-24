import GlobalStatsCard from '../../../components/admin/dashboard/GlobalStatsCard';
import EntretiensProjetsCard from '../../../components/admin/dashboard/EntretiensProjetsCard';
import PostesCard from '../../../components/admin/dashboard/PostesCard';
import ExportReportsCard from '../../../components/admin/dashboard/ExportReportsCard';
import AnalyticsChartCard from '../../../components/admin/dashboard/AnalyticsChartCard';
import ActivityFeedCard from '../../../components/admin/dashboard/ActivityFeedCard';

import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const DashboardAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tableau de Bord Administrateur</h1>

      {/* Section 1 : Statistiques utilisateurs - Entretiens & Projets */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <div className="relative">
          <GlobalStatsCard />
        </div>

        <div className="relative">
          <EntretiensProjetsCard />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate('/gestionencadreursadmin')}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      

      {/* Section 3 : Postes à pourvoir & export */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <div className="relative">
          <PostesCard />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate('/administrationgenerale')}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="relative">
          <ExportReportsCard />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate('/administrationgenerale')}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {/* Section 4 : Statistiques & Activités */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="relative">
          <AnalyticsChartCard />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate('/administrationgenerale')}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="relative">
          <ActivityFeedCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
