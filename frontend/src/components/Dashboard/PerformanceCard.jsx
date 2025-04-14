const PerformanceCard = () => {
  const score = 72;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-md font-semibold text-gray-700 mb-2">Performance globale</h2>
      <p className="text-2xl font-bold text-green-600">{score} / 100</p>
      <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
};

export default PerformanceCard;
