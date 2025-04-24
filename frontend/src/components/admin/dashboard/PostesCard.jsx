import React from 'react';

const PostesCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-full poppins-light">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">💼 Postes à pourvoir</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li><strong>Postes à pourvoir :</strong> 5</li>
        <li><strong>Postes assignés :</strong> 4</li>
        <li><strong>Stagiaires sans affectation :</strong> 1</li>
      </ul>
    </div>
  );
};

export default PostesCard;
