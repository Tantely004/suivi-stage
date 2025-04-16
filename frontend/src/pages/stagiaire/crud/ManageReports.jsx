import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ManageReports = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion des comptes-rendus</h1>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block mb-2 text-sm text-gray-700">Ajouter un compte-rendu</label>
          <InputText placeholder="Intitulé du compte-rendu" className="w-full" />
        </div>
        <Button label="Enregistrer le compte-rendu" icon="pi pi-save" className="p-button-primary w-full" />

        <h2 className="font-semibold text-gray-700 mt-6 mb-2">Historique</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>📅 04 Mars — Présentation — Validé ✅</li>
          <li>📅 11 Mars — Maquette validée — Validé ✅</li>
        </ul>
      </div>
    </div>
  );
};

export default ManageReports;
