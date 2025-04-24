import React from 'react';

const SuggestionsIa = () => {
  const suggestions = [
    "Thème suggéré : Optimisation de la base de données MySQL",
    "Projet recommandé : Développement d’un tableau de bord d’analyse",
    "Technologie : Django + React.js"
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Suggestions de l’IA</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuggestionsIa;
