import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Dropdown } from 'primereact/dropdown';

// Enregistrer les composants nécessaires de ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OverviewGraph = () => {
  const [period, setPeriod] = useState('mois');

  const dataByPeriod = {
    semaine: {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
      data: [20, 30, 50, 60, 80],
    },
    mois: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
      data: [30, 45, 60, 80, 95],
    },
    annee: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [55, 60, 75, 80, 90],
    },
  };

  const chartData = {
    labels: dataByPeriod[period].labels,
    datasets: [{
      label: 'Progression',
      data: dataByPeriod[period].data,
      backgroundColor: '#4F46E5',
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Progression' },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, ticks: { stepSize: 20 } },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 h-72">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-700">Progression</h2>
        <Dropdown
          value={period}
          options={[
            { label: 'Semaine', value: 'semaine' },
            { label: 'Mois', value: 'mois' },
            { label: 'Année', value: 'annee' }
          ]}
          onChange={(e) => setPeriod(e.value)}
          className="w-36"
        />
      </div>
      <div className="h-52">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default OverviewGraph;
