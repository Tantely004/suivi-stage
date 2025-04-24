import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const GestionStagiairesAdmin = () => {
  const [stagiaires, setStagiaires] = useState([
    { id: 1, nom: "Rakoto Jean", email: "jean.rakoto@example.com", projet: "Dashboard RH" },
    { id: 2, nom: "Randrianarisoa Fanja", email: "fanja.randrian@example.com", projet: "Gestion documentaire" }
  ]);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des Stagiaires</h1>

      <Card className="shadow bg-white rounded-lg">
        <DataTable value={stagiaires} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
          <Column field="nom" header="Nom du stagiaire" sortable bodyClassName="px-3 py-3" />
          <Column field="email" header="Email" sortable bodyClassName="px-3 py-3" />
          <Column field="projet" header="Projet" sortable bodyClassName="px-3 py-3" />
        </DataTable>
      </Card>
    </div>
  );
};

export default GestionStagiairesAdmin;
