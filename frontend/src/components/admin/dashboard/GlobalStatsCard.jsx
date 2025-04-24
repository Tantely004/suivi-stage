import React from 'react';

const GlobalStatsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-full poppins-light">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">👥 Statistiques Utilisateurs</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li><strong>Total utilisateurs :</strong> 85</li>
        <li><strong>Stagiaires :</strong> 60</li>
        <li><strong>Encadreurs :</strong> 20</li>
        <li><strong>Admins :</strong> 5</li>
      </ul>
    </div>
  );
};

export default GlobalStatsCard;
