import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const GestionStagiaire = () => {
  const [stagiaires, setStagiaires] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulation de récupération API - à remplacer par fetch ou axios vers ton backend Django
    setTimeout(() => {
      setStagiaires([
        { id: 1, nom: "Rakoto Jean", email: "jean.rakoto@example.com", projet: "Dashboard RH" },
        { id: 2, nom: "Randrianarisoa Fanja", email: "fanja.randrian@example.com", projet: "Gestion documentaire" }
      ]);
    }, 500);
  }, []);

  const actionBodyTemplate = (rowData) => (
    <Button
      label="Rapports"
      className="bg-blue-700 text-white p-[0.25rem] rounded"
      onClick={() => navigate(`/suivirapportsstagiaires/${rowData.id}`)}
    />
  );

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Liste des Stagiaires Suivis</h1>

      <Card className="shadow bg-white rounded-lg">
        <DataTable
          value={stagiaires}
          paginator
          rows={5}
          className="p-datatable-sm"
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column field="nom" header="Nom du stagiaire" sortable bodyClassName="px-3 py-3" />
          <Column field="email" header="Email" sortable bodyClassName="px-3 py-3" />
          <Column field="projet" header="Projet Assigné" sortable bodyClassName="px-3 py-3" />
          <Column header="Actions" body={actionBodyTemplate} style={{ width: '8rem' }} />
        </DataTable>
      </Card>
    </div>
  );
};

export default GestionStagiaire;
