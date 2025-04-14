import React from 'react';

const MonStage = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Mon Stage</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Détails du stage</h2>
        <p><strong>Thème :</strong> Développement d’un tableau de bord pour le suivi des projets</p>
        <p><strong>Tuteur :</strong> M. Rakoto</p>
        <p><strong>Durée :</strong> 01 Mars 2025 au 31 Mai 2025</p>
        <p><strong>Technologies :</strong> React.js, Django, MySQL</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Comptes-rendus déposés</h2>
        <ul className="list-disc ml-5 space-y-1 text-gray-600 text-sm">
          <li>📅 04 Mars - Présentation du projet</li>
          <li>📅 11 Mars - Maquette fonctionnelle validée</li>
          <li>📅 18 Mars - Authentification stagiaire terminée</li>
        </ul>
      </div>
    </div>
  );
};

export default MonStage;
