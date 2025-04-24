import React from 'react';
import StagiaireRepartitionChart from '../../../components/encadreur/dashboard/StagiaireRepartitionChart';
import ProjectCountCard from '../../../components/encadreur/dashboard/ProjectCountCard';
import AvancementMoyenCard from '../../../components/encadreur/dashboard/AvancementMoyenCard';
import EntretienCountCard from '../../../components/encadreur/dashboard/EntretienCountCard';
import EncadreurStagiairesList from '../../../components/encadreur/dashboard/EncadreurStagiairesList';
import DerniersRapportsList from '../../../components/encadreur/dashboard/DerniersRapportsList';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const DashboardEncadreur = () => {
  const navigate = useNavigate();

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

      {/* Stagiaires et Liste d'entretiens planifiés */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <div className="relative">
          <EncadreurStagiairesList />
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate("/gestionstagiaires")}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="relative">
          <Card title="🗓️ Entretiens Planifiés" className="shadow-sm bg-white">
            <ul className="space-y-4 text-gray-700 text-sm">
              <li>
                <p className="font-semibold">15 Avril 2025 — Jean Rakoto</p>
                <p>📌 Validation livrable intermédiaire</p>
              </li>
              <li>
                <p className="font-semibold">22 Avril 2025 — Fanja Randrian</p>
                <p>📌 Présentation avancée du projet</p>
              </li>
            </ul>
          </Card>
          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate("/calendrierencadreur")}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {/* Derniers rapports */}
      <div className="relative">
        <DerniersRapportsList />
        <button
          className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
          onClick={() => navigate("/notificationsencadreur")}
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default DashboardEncadreur;
