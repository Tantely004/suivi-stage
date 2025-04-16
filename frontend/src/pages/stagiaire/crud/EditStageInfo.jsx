import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const EditStageInfo = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Modifier les informations du stage</h1>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block mb-2 text-sm text-gray-700">Thème du stage</label>
          <InputText placeholder="Entrez le thème du stage" className="w-full" />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-700">Tuteur</label>
          <InputText placeholder="Nom du tuteur" className="w-full" />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-700">Technologies</label>
          <InputText placeholder="React, Django, MySQL..." className="w-full" />
        </div>
        <Button label="Enregistrer les modifications" icon="pi pi-save" className="p-button-primary w-full" />
      </div>
    </div>
  );
};

export default EditStageInfo;
