import { Card } from 'primereact/card';

const GlobalStatsCard = () => {
  return (
    <Card title="📊 Statistiques globales" className="shadow-sm bg-white">
      <ul className="text-gray-700 text-sm space-y-2">
        <li>👨‍🎓 Stagiaires inscrits : <strong>15</strong></li>
        <li>🧑‍🏫 Encadreurs actifs : <strong>4</strong></li>
        <li>📁 Projets en cours : <strong>8</strong></li>
        <li>📅 Entretiens planifiés : <strong>5</strong></li>
      </ul>
    </Card>
  );
};

export default GlobalStatsCard;
