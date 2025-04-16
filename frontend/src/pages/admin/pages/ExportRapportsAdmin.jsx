import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ExportRapportsAdmin = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Export & Rapports</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="📄 Exporter les données" className="shadow-sm bg-white">
          <p className="text-gray-700 text-sm mb-4">
            Exportez les données stagiaires, projets, entretiens en format CSV ou PDF.
          </p>
          <div className="flex gap-4">
            <Button label="Export CSV" icon="pi pi-file" className="p-button-sm p-button-secondary" />
            <Button label="Export PDF" icon="pi pi-file-pdf" className="p-button-sm p-button-danger" />
          </div>
        </Card>

        <Card title="📊 Graphiques analytiques" className="shadow-sm bg-white">
          <p className="text-gray-700 text-sm mb-4">
            Consultez des graphiques de progression globale, taux de dépôt, affectation des projets.
          </p>
          <Button label="Afficher Graphiques" icon="pi pi-chart-bar" className="p-button-sm p-button-help" />
        </Card>
      </div>
    </div>
  );
};

export default ExportRapportsAdmin;
