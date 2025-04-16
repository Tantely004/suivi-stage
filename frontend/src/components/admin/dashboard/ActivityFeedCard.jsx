import { Card } from 'primereact/card';

const ActivityFeedCard = () => {
  return (
    <Card title="📰 Activités récentes" className="shadow-sm bg-white">
      <ul className="text-sm text-gray-700 space-y-2">
        <li>📥 Jean Rakoto a soumis un rapport (12 Avril 2025).</li>
        <li>➕ Un nouvel encadreur a été ajouté (M. Randrian).</li>
        <li>⚡ Rappel automatique envoyé pour 3 entretiens à venir.</li>
      </ul>
    </Card>
  );
};

export default ActivityFeedCard;
