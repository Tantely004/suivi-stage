import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const ParametresEncadreur = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Paramètres du compte</h1>

      <div className="space-y-6">
        <Card className="shadow-sm bg-white">
          <h2 className="text-md font-semibold text-gray-700 mb-4">🔑 Sécurité</h2>
          <div className="flex items-center gap-4">
            <InputText placeholder="Nouveau mot de passe" className="w-full" />
            <Button label="Modifier" icon="pi pi-check" className="p-button-sm p-button-primary" />
          </div>
        </Card>

        <Card className="shadow-sm bg-white">
          <h2 className="text-md font-semibold text-gray-700 mb-4">⚙️ Préférences</h2>
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            Activer les rappels par e-mail
          </label>
        </Card>
      </div>
    </div>
  );
};

export default ParametresEncadreur;
