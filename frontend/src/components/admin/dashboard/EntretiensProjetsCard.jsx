import React from 'react';

const EntretiensProjetsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-full poppins-light">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📅 Entretiens & Projets</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li><strong>Nombre d'entretiens planifiés :</strong> 18</li>
        <li><strong>Projets stagiaires en cours :</strong> 12</li>
        <li><strong>Projets finalisés :</strong> 6</li>
      </ul>
    </div>
  );
};

export default EntretiensProjetsCard;
