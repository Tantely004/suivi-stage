import React from 'react';
import { useNavigate } from 'react-router-dom';

const MonStage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mon Stage</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Informations générales */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-info-circle text-blue-600"></i> Informations générales
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Thème :</strong> Développement d’un tableau de bord</li>
            <li><strong>Service :</strong> SIIGFP</li>
            <li><strong>Tuteur :</strong> M. Rakoto Harilala</li>
            <li><strong>Durée :</strong> 01 Mars — 31 Mai 2025</li>
            <li><strong>Technologies :</strong> React.js, Django, MySQL</li>
            <li><strong>Objectifs :</strong> Conception d'une interface de suivi automatisée.</li>
          </ul>
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/editstageinfo")}
          >
            Modifier
          </button>
        </div>

        {/* Avancement du projet */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-chart-line text-green-600"></i> État d’avancement
          </h2>
          <div className="w-full bg-gray-200 h-4 rounded-full mb-3">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-sm text-gray-600">65% du projet réalisé</p>
          <ul className="list-disc ml-5 mt-4 text-sm text-gray-600 space-y-1">
            <li>✔ Analyse des besoins validée</li>
            <li>✔ Maquettes UI validées</li>
            <li>✔ Authentification terminée</li>
            <li>⏳ Intégration des dashboards en cours</li>
            <li>🚧 Connexion à l’IA en attente</li>
          </ul>
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/managedocuments")}
          >
            Modifier
          </button>
        </div>

        {/* Comptes-rendus déposés */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-file-edit text-purple-600"></i> Comptes-rendus déposés
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📅 04 Mars — Présentation — <span className="text-green-600 font-medium">Validé</span></li>
            <li>📅 11 Mars — Maquette validée — <span className="text-green-600 font-medium">Validé</span></li>
            <li>📅 18 Mars — Authentification — <span className="text-yellow-500 font-medium">En attente</span></li>
          </ul>
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/managereports")}
          >
            Modifier
          </button>
        </div>

        {/* Documents liés */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-folder-open text-orange-600"></i> Documents de stage
          </h2>
          <ul className="space-y-2 text-sm text-blue-600 underline">
            <li><a href="#">Plan de travail.pdf</a></li>
            <li><a href="#">Document de cadrage.pdf</a></li>
            <li><a href="#">Présentation intermédiaire.pptx</a></li>
          </ul>
          <button
            className="absolute top-3 right-3 text-xs text-blue-600 underline"
            onClick={() => navigate("/managedocuments")}
          >
            Gérer
          </button>
        </div>

      </div>
    </div>
  );
};

export default MonStage;
