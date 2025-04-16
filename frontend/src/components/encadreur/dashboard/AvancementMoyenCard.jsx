import { ProgressBar } from 'primereact/progressbar';

const AvancementMoyenCard = () => {
  const avancement = 67;  // Exemple d'avancement moyen en %

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-lg text-gray-700 mb-2">⏳ Avancement Moyen</h2>
      <ProgressBar 
        value={avancement}
        showValue 
        displayValueTemplate={(value) => `${value}% complété`}
      />
    </div>
  );
};

export default AvancementMoyenCard;
