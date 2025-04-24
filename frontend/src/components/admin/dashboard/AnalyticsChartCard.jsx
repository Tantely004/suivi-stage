import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
  datasets: [
    {
      label: 'Utilisateurs actifs',
      backgroundColor: '#3B82F6',
      data: [20, 35, 50, 45, 70],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: 'Évolution des utilisateurs actifs' },
  },
};

const AnalyticsChartCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 h-72 poppins-light">
      <Bar data={data} options={options} />
    </div>
  );
};

export default AnalyticsChartCard;
