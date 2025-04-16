import { Button } from 'primereact/button';

const EncadreurStagiairesList = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">🧑‍🎓 Stagiaires Encadrés</h2>
      <ul className="space-y-4 text-gray-700 text-sm">
        <li className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Jean Rakoto</p>
            <p>Projet : Tableau de bord RH</p>
          </div>
          <Button icon="pi pi-eye" label="Fiche" className="p-button-text p-button-sm" />
        </li>
        <li className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Fanja Randrian</p>
            <p>Projet : Gestion documentaire</p>
          </div>
          <Button icon="pi pi-eye" label="Fiche" className="p-button-text p-button-sm" />
        </li>
      </ul>
    </div>
  );
};

export default EncadreurStagiairesList;
