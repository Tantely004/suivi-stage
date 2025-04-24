import MiniRadialChart from '../../../components/stagiaire/dashboard/MiniRadialChart';
import TaskBreakdown from '../../../components/stagiaire/dashboard/TaskBreakdown';
import UpcomingInterviewsCard from '../../../components/stagiaire/pages/UpcomingInterviewsCard';
import ProfileSummaryCard from '../../../components/stagiaire/pages/ProfileSummaryCard';
import NotificationsCard from '../../../components/stagiaire/pages/NotificationsCard';
import OverviewGraph from '../../../components/stagiaire/dashboard/OverviewGraph';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const DashboardStagiaire = () => {
  const navigate = useNavigate();

  return (
    <main className="xl:p-[1.5rem] xl:w-full bg-transparent xl:min-h-screen rounded-2xl">
      <p className="xl:mb-[1.5rem] text-gray-800 text-3xl poppins-title">Tableau de bord</p>

      {/* Ligne 1 : Stats + Profil */}  
      <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-6 xl:p-[0.25rem] xl:mb-6">
        <MiniRadialChart value={72} label="Taux de participation" />
        <MiniRadialChart value={84} label="Performance globale" color="#10B981" />

        <div className="relative">
          <ProfileSummaryCard />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate("/profilstagiaire")}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {/* Ligne 2 : Entretiens + Tâches */}  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 relative">
          <UpcomingInterviewsCard />
          <button
            className="absolute bottom-8 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate("/calendrierstagiaire")}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="relative">
          <TaskBreakdown />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate("/monstage")}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {/* Ligne 3 : Notifications + Graphique */}  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NotificationsCard />
        <OverviewGraph />
      </div>
    </main>
  );
};

export default DashboardStagiaire;
