import { FaBell } from 'react-icons/fa';

const NotificationsCard = () => {
  const notifications = [
    { message: "Compte rendu hebdomadaire en attente", date: "Il y a 1 jour" },
    { message: "Rappel : entretien demain à 14h", date: "Il y a 4h" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <FaBell className="text-red-500" />
        <h2 className="text-md font-semibold text-gray-700">Notifications</h2>
      </div>
      <ul className="space-y-2 text-sm text-gray-600">
        {notifications.map((notif, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-1">
            <span>{notif.message}</span>
            <span className="text-xs text-gray-400">{notif.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsCard;
