import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

const SuiviRapportsStagiaires = () => {
  const [rapports, setRapports] = useState([
    { id: 1, titre: "Rapport Initial", date: "2025-04-05", status: "En attente", commentaire: "", fichier: "/documents/rapport1.pdf" },
    { id: 2, titre: "Compte Rendu Semaine 2", date: "2025-04-12", status: "Validé", commentaire: "Bon travail", fichier: "/documents/rapport2.pdf" },
  ]);

  const validerRapport = (id) => {
    setRapports(rapports.map(r =>
      r.id === id ? { ...r, status: "Validé" } : r
    ));
  };

  const refuserRapport = (id) => {
    setRapports(rapports.map(r =>
      r.id === id ? { ...r, status: "Refusé" } : r
    ));
  };

  const commentaireTemplate = (rowData) => (
    <InputTextarea
      rows={1}
      value={rowData.commentaire}
      placeholder="Laisser un commentaire"
      onChange={(e) => {
        const updated = rapports.map(r =>
          r.id === rowData.id ? { ...r, commentaire: e.target.value } : r
        );
        setRapports(updated);
      }}
    />
  );

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-check"
        className="p-button-sm p-button-success"
        onClick={() => validerRapport(rowData.id)}
        tooltip="Valider"
      />
      <Button
        icon="pi pi-times"
        className="p-button-sm p-button-danger"
        onClick={() => refuserRapport(rowData.id)}
        tooltip="Refuser"
      />
    </div>
  );

  const documentTemplate = (rowData) => (
    <div className="flex gap-2">
      <a
        href={rowData.fichier}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-[0.25rem] rounded text-xs inline-flex items-center justify-center"
      >
        Visionner
      </a>
      <a
        href={rowData.fichier}
        download
        className="bg-green-600 text-white p-[0.25rem] rounded text-xs inline-flex items-center justify-center"
      >
        Télécharger
      </a>
    </div>
  );

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Suivi des Rapports Stagiaires</h1>

      <Card className="shadow bg-white rounded-lg">
        <DataTable value={rapports} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
          <Column field="titre" header="Titre du Rapport" sortable bodyClassName="px-3 py-3" />
          <Column field="date" header="Date de Soumission" sortable bodyClassName="px-3 py-3" />
          <Column field="status" header="Statut" sortable bodyClassName="px-3 py-3" />
          <Column header="Commentaire" body={commentaireTemplate} style={{ width: "20rem" }} />
          <Column header="Document" body={documentTemplate} style={{ width: "12rem" }} />
          <Column header="Actions" body={actionTemplate} style={{ width: "8rem" }} />
        </DataTable>
      </Card>
    </div>
  );
};

export default SuiviRapportsStagiaires;
