import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';

const AdministrationGenerale = () => {

  // Exemple de données pour le graphique
  const chartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
    datasets: [
      {
        label: 'Comptes créés',
        data: [12, 19, 9, 14, 17],
        backgroundColor: '#4F46E5'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Évolution des Comptes Créés'
      }
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Administration Générale</h1>

      {/* Section Postes à pourvoir */}
      <Card title="📋 Postes à Pourvoir" className="shadow-sm bg-white mb-6">
        <ul className="text-sm text-gray-700 space-y-2">
          <li>➡️ Analyste SI — <span className="text-blue-600">Ouvert</span></li>
          <li>➡️ Développeur Web Junior — <span className="text-green-600">Ouvert</span></li>
          <li>➡️ Data Scientist — <span className="text-red-500">Fermé</span></li>
        </ul>
        <Button
          label="Gérer les Postes"
          icon="pi pi-pencil"
          className="p-button-sm p-button-secondary mt-4"
        />
      </Card>

      {/* Section Export & Import */}
      <Card title="💾 Export / Import de Données" className="shadow-sm bg-white mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <Button label="Exporter les Données" icon="pi pi-download" className="p-button-sm p-button-primary" />
          <Button label="Importer un fichier" icon="pi pi-upload" className="p-button-sm p-button-success" />
        </div>
      </Card>

      {/* Section Graphique Analytique */}
      <Card title="📊 Statistiques Utilisateurs" className="shadow-sm bg-white">
        <div className="h-64">
          <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
      </Card>
    </div>
  );
};

export default AdministrationGenerale;
