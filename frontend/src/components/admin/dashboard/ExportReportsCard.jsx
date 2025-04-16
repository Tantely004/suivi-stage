import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ExportReportsCard = () => {
  return (
    <Card title="📂 Export de rapports" className="shadow-sm bg-white">
      <p className="text-sm text-gray-700 mb-4">
        Exporte les rapports de suivi sous divers formats pour archivage ou réunion.
      </p>
      <div className="flex gap-4">
        <Button label="Export CSV" icon="pi pi-file" className="p-button-sm p-button-secondary" />
        <Button label="Export PDF" icon="pi pi-file-pdf" className="p-button-sm p-button-danger" />
      </div>
    </Card>
  );
};

export default ExportReportsCard;
