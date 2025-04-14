const ParticipationCard = () => {
  const taux = 87;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-md font-semibold text-gray-700 mb-2">Taux de participation</h2>
      <p className="text-2xl font-bold text-blue-600">{taux}%</p>
      <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${taux}%` }}></div>
      </div>
    </div>
  );
};

export default ParticipationCard;
