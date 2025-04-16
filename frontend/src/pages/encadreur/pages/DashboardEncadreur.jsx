import React from 'react';
import StagiaireRepartitionChart from '../../../components/encadreur/dashboard/StagiaireRepartitionChart';
import ProjectCountCard from '../../../components/encadreur/dashboard/ProjectCountCard';
import AvancementMoyenCard from '../../../components/encadreur/dashboard/AvancementMoyenCard';
import EntretienCountCard from '../../../components/encadreur/dashboard/EntretienCountCard';
import EncadreurStagiairesList from '../../../components/encadreur/dashboard/EncadreurStagiairesList';
import PlanificationEntretienCard from '../../../components/encadreur/dashboard/PlanificationEntretienCard';
import DerniersRapportsList from '../../../components/encadreur/dashboard/DerniersRapportsList';

const DashboardEncadreur = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tableau de Bord Encadreur</h1>

      {/* Statistiques hautes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StagiaireRepartitionChart />
        <ProjectCountCard />
        <AvancementMoyenCard />
        <EntretienCountCard />
      </div>

      {/* Stagiaires et Planification */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <EncadreurStagiairesList />
        <PlanificationEntretienCard />
      </div>

      {/* Liste des derniers rapports */}
      <div className="grid grid-cols-1 gap-6">
        <DerniersRapportsList />
      </div>
    </div>
  );
};

export default DashboardEncadreur;
