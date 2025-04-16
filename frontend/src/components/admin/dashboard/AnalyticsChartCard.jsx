import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { useState, useEffect } from 'react';

const AnalyticsChartCard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ['Stagiaires', 'Encadreurs', 'Projets'],
      datasets: [
        {
          label: 'Répartition',
          data: [15, 4, 8],
          backgroundColor: ['#007bff', '#28a745', '#ffc107'],
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };
    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <Card title="📈 Répartition générale" className="shadow-sm bg-white h-80">
      <Chart type="bar" data={chartData} options={chartOptions} className="h-full" />
    </Card>
  );
};

export default AnalyticsChartCard;
