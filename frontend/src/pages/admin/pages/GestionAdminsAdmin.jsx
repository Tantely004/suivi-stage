import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

const GestionAdminsAdmin = () => {
  const [admins, setAdmins] = useState([
    { id: 1, nom: "Rabe Joel", email: "joel.admin@example.com", poste: "Super Administrateur" },
    { id: 2, nom: "Rakoto Patrick", email: "patrick.admin@example.com", poste: "Administrateur système" }
  ]);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestion des Administrateurs</h1>

      <Card className="shadow bg-white rounded-lg">
        <DataTable value={admins} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
          <Column field="nom" header="Nom de l'Administrateur" sortable bodyClassName="px-3 py-3" />
          <Column field="email" header="Email" sortable bodyClassName="px-3 py-3" />
          <Column field="poste" header="Poste" sortable bodyClassName="px-3 py-3" />
        </DataTable>
      </Card>
    </div>
  );
};

export default GestionAdminsAdmin;
