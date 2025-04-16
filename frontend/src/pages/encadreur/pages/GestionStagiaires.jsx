import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const GestionStagiaires = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Gestion des Stagiaires</h1>

      <Card className="shadow-sm bg-white">
        <ul className="space-y-4 text-gray-700 text-sm">
          <li className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Jean Rakoto — Projet : Tableau de bord RH</p>
              <p>Email : jean.rakoto@esi.mg</p>
            </div>
            <div className="space-x-2">
              <Button label="Modifier" icon="pi pi-pencil" className="p-button-sm p-button-warning" />
              <Button label="Supprimer" icon="pi pi-trash" className="p-button-sm p-button-danger" />
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Fanja Randrian — Projet : Gestion documentaire</p>
              <p>Email : fanja.randrian@esi.mg</p>
            </div>
            <div className="space-x-2">
              <Button label="Modifier" icon="pi pi-pencil" className="p-button-sm p-button-warning" />
              <Button label="Supprimer" icon="pi pi-trash" className="p-button-sm p-button-danger" />
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default GestionStagiaires;
