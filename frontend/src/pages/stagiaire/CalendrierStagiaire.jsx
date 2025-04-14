import React from 'react';

const CalendrierStagiaire = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Calendrier des entretiens</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-md font-semibold text-gray-700 mb-4">Entretiens planifiés</h2>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>📅 15 Avril 2025 à 10h00 — Entretien hebdomadaire avec le tuteur</li>
          <li>📅 22 Avril 2025 à 09h30 — Réunion intermédiaire avec l’équipe SI</li>
          <li>📅 29 Avril 2025 à 14h00 — Validation livrable final</li>
        </ul>
      </div>
    </div>
  );
};

export default CalendrierStagiaire;
