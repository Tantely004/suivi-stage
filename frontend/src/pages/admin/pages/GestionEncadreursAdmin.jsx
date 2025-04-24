import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

const GestionEncadreursAdmin = () => {
  const [encadreurs, setEncadreurs] = useState([
    { id: 1, nom: "Andriamatoa Herisoa", email: "herisoa@entreprise.com", service: "Informatique" },
    { id: 2, nom: "Rasoanirina Mamy", email: "mamy@entreprise.com", service: "Ressources Humaines" }
  ]);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des Encadreurs</h1>

      <Card className="shadow bg-white rounded-lg">
        <DataTable value={encadreurs} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
          <Column field="nom" header="Nom de l'encadreur" sortable bodyClassName="px-3 py-3" />
          <Column field="email" header="Email" sortable bodyClassName="px-3 py-3" />
          <Column field="service" header="Service" sortable bodyClassName="px-3 py-3" />
        </DataTable>
      </Card>
    </div>
  );
};

export default GestionEncadreursAdmin;
