import React from 'react';

const ExportReportsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-full poppins-light">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📤 Export & Rapports</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li><strong>Export rapports mensuels :</strong> Activé</li>
        <li><strong>Nombre d’exports cette semaine :</strong> 4</li>
      </ul>
    </div>
  );
};

export default ExportReportsCard;
