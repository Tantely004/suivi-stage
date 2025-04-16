import GlobalStatsCard from '../../../components/admin/dashboard/GlobalStatsCard';
import SystemAlertsCard from '../../../components/admin/dashboard/SystemAlertsCard';
import ActivityFeedCard from '../../../components/admin/dashboard/ActivityFeedCard';
import AnalyticsChartCard from '../../../components/admin/dashboard/AnalyticsChartCard';
import ExportReportsCard from '../../../components/admin/dashboard/ExportReportsCard';

const DashboardAdmin = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tableau de Bord Administrateur</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <GlobalStatsCard />
        <SystemAlertsCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <ActivityFeedCard />
        <ExportReportsCard />
      </div>

      <div className="grid grid-cols-1">
        <AnalyticsChartCard />
      </div>
    </div>
  );
};

export default DashboardAdmin;
