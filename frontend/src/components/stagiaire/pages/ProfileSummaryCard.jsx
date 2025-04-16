import { FaUser } from 'react-icons/fa';

const ProfileSummaryCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-gray-700 font-semibold text-md">
          <FaUser className="text-indigo-500" /> Profil rapide
        </h2>
      </div>
      <p className="text-sm text-gray-600">Nom : Johana Ranaivo</p>
      <p className="text-sm text-gray-600">Établissement : ENI</p>
      <p className="text-sm text-gray-600">Spécialité : Développement Web</p>
    </div>
  );
};

export default ProfileSummaryCard;
