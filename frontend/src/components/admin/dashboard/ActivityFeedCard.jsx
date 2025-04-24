import React from 'react';

const ActivityFeedCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-full poppins-light">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">🕓 Activités Récentes</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>✅ Rapport validé pour Rakoto Jean</li>
        <li>📝 Nouveau poste créé : Dév Web</li>
        <li>👤 Nouvel utilisateur admin ajouté</li>
      </ul>
    </div>
  );
};

export default ActivityFeedCard;
