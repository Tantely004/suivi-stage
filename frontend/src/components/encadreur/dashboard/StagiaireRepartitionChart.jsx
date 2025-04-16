import { Chart } from 'primereact/chart';

const StagiaireRepartitionChart = () => {
  const repartitionStagiaires = {
    labels: ['Actifs', 'Terminés', 'En attente'],
    datasets: [
      {
        data: [3, 1, 1],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
        hoverBackgroundColor: ['#66BB6A', '#42A5F5', '#FFCA28']
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">👥 Répartition Stagiaires</h2>
      <Chart type="doughnut" data={repartitionStagiaires} className="w-full md:w-20rem mx-auto" />
    </div>
  );
};

export default StagiaireRepartitionChart;
