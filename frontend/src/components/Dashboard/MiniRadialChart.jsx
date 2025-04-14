// src/components/Dashboard/MiniRadialChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const MiniRadialChart = ({ value, label, color }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color || '#3B82F6', '#E5E7EB'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white shadow xl:rounded-lg xl:p-[1rem] text-center">
      <div className="xl:w-[6rem] mx-auto">
        <Doughnut data={data} options={options} />
      </div>
      <p className="mt-2 text-sm text-gray-700">{label}</p>
      <p className="font-bold text-blue-600 text-lg">{value}%</p>
    </div>
  );
};

export default MiniRadialChart;
