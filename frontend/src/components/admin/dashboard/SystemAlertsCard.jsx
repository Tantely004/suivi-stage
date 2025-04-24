import React from 'react';

const SystemAlertsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-full poppins-light">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">⚠️ Alertes Système</h2>
      <ul className="text-sm text-red-600 space-y-2">
        <li>🛑 Stagiaire sans encadreur affecté</li>
        <li>⏳ Validation de rapport en attente (3)</li>
      </ul>
    </div>
  );
};

export default SystemAlertsCard;
