// src/pages/stagiaire/DashboardStagiaire.jsx
import MiniRadialChart from '../../components/Dashboard/MiniRadialChart';
import TaskBreakdown from '../../components/Dashboard/TaskBreakdown';
import UpcomingInterviewsCard from '../../components/Dashboard/stagiaire/UpcomingInterviewsCard';
import ProfileSummaryCard from '../../components/Dashboard/stagiaire/ProfileSummaryCard';
import NotificationsCard from '../../components/Dashboard/stagiaire/NotificationsCard';
import OverviewGraph from '../../components/Dashboard/OverviewGraph';
import { useNavigate } from 'react-router-dom';

const DashboardStagiaire = () => {
  const navigate = useNavigate();

  return (
    <main className="xl:p-[1.5rem] xl:w-full bg-gray-100 xl:min-h-screen rounded-2xl">
      <h1 className="xl:mb-[1.5rem] text-gray-800 poppins-title">Tableau de bord</h1>

      {/* Ligne 1 : Stats + Tâches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MiniRadialChart value={72} label="Taux de participation" />
        <MiniRadialChart value={84} label="Performance globale" color="#10B981" />
        <div className="relative">
          <TaskBreakdown />
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/monstage")}
          >
            Voir
          </button>
        </div>
      </div>

      {/* Ligne 2 : Entretiens + Profil */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 relative">
          <UpcomingInterviewsCard />
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/calendrierstagiaire")}
          >
            Voir
          </button>
        </div>
        <div className="relative">
          <ProfileSummaryCard />
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/profilstagiaire")}
          >
            Voir
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
