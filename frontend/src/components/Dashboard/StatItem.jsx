const StatItem = ({ title, value, color }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <p className={`text-lg font-semibold ${color}`}>{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

export default StatItem;
