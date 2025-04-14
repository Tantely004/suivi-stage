import React from 'react';

const ParametresStagiaire = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Paramètres du compte</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Sécurité</h2>
        <button className="text-sm text-blue-600 underline">Modifier le mot de passe</button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Préférences</h2>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="form-checkbox" defaultChecked />
          Recevoir des rappels par e-mail
        </label>
      </div>
    </div>
  );
};

export default ParametresStagiaire;
