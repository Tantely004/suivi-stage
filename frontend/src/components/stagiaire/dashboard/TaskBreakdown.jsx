import { FaTasks } from 'react-icons/fa';

const TaskBreakdown = () => {
  const tasks = [
    { label: 'Documentation fonctionnelle', status: 'Complétée', color: 'text-green-600' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="flex items-center gap-2 text-gray-700 font-semibold text-md">
          <FaTasks className="text-yellow-500" /> Répartition des tâches
        </h2>
      </div>

      <ul className="space-y-2 text-sm">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{task.label}</span>
            <span className={`font-medium ${task.color}`}>{task.status}</span>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-gray-500 italic">
        Dernière mise à jour : 07 Avril 2025
      </p>
    </div>
  );
};

export default TaskBreakdown;
