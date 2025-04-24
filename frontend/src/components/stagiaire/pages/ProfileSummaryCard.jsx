import { FaUser } from 'react-icons/fa';

const ProfileSummaryCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="flex gap-2 text-gray-700 poppins-title">
          <FaUser className="text-gray-500" /> Profil rapide
        </h2>
      </div>
      <div className="poppins-light text-[0.9rem] text-gray-600 xl:mt-[0.5rem]">
        <p>Nom : Johana Ranaivo</p>
        <p>Établissement : ESMIA</p>
        <p>Spécialité : Développement Web</p>
      </div>
    </div>
  );
};

export default ProfileSummaryCard;
