import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const ManageTasksStage = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion des tâches de stage</h1>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block mb-2 text-sm text-gray-700">Nouvelle tâche</label>
          <InputText placeholder="Ex: Implémenter l'authentification" className="w-full" />
        </div>
        <Button label="Ajouter la tâche" icon="pi pi-plus" className="p-button-success w-full mb-4" />

        <h2 className="font-semibold text-gray-700 mt-6 mb-2">Tâches existantes</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✔️ Analyse des besoins — Validé</li>
          <li>🕓 Intégration du backend — En cours</li>
          <li>❌ Déploiement final — Non commencé</li>
        </ul>
      </div>
    </div>
  );
};

export default ManageTasksStage;
