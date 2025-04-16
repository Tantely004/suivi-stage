import React from 'react';
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

// Enregistrement des éléments nécessaires de ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Données factices pour le graphique
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Progression',
      data: [30, 45, 60, 80, 95],
      backgroundColor: '#4F46E5',
    },
  ],
};

// Options du graphique
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Progression mensuelle',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

const OverviewGraph = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 h-64">
      <div className="h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OverviewGraph;
