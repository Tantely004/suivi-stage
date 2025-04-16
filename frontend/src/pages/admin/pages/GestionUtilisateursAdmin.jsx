import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const utilisateursFictifs = [
  { nom: 'Stephano Todisoa', role: 'Stagiaire', email: 'stephano.todisoa@esi.mg' },
  { nom: 'Fanja Randrian', role: 'Encadrant', email: 'fanja.randrian@ministere.mg' },
  { nom: 'Rasoa Rabe', role: 'Admin', email: 'rasoa.rabe@ministere.mg' }
];

const GestionUtilisateursAdmin = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Gestion des Utilisateurs</h1>

      <Card title="📋 Liste des utilisateurs" className="shadow-sm bg-white">
        <DataTable value={utilisateursFictifs} paginator rows={5} className="p-datatable-sm">
          <Column field="nom" header="Nom" />
          <Column field="role" header="Rôle" />
          <Column field="email" header="Email" />
          <Column
            header="Actions"
            body={() => (
              <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-button-sm" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
              </div>
            )}
          />
        </DataTable>
      </Card>
    </div>
  );
};

export default GestionUtilisateursAdmin;
