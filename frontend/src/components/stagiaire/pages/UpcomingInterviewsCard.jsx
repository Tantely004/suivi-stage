import { FaCalendarAlt } from 'react-icons/fa';

const UpcomingInterviewsCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-gray-700 font-semibold text-md">
          <FaCalendarAlt className="text-purple-500" /> Prochains entretiens
        </h2>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>- Tuteur : 12 Avril à 14h</li>
        <li>- RH : 18 Avril à 10h</li>
        <li>- Tuteur : 21 Avril à 09h</li>
        <li>- RH : 23 Avril à 10h30</li>
      </ul>
    </div>
  );
};

export default UpcomingInterviewsCard;
