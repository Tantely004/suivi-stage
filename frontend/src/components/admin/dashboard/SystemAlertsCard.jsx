import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const SystemAlertsCard = () => {
  return (
    <Card title="⚠️ Alertes système" className="shadow-sm bg-white">
      <ul className="text-sm text-gray-700 space-y-3">
        <li>🔴 Rapport de stage non validé (Stagiaire : Fanja) — Échéance proche !</li>
        <li>🟠 Nouveau stagiaire sans projet assigné.</li>
        <li>🟡 Tuteur inactif depuis 14 jours.</li>
      </ul>
      <div className="mt-4 text-right">
        <Button label="Voir détails" className="p-button-sm p-button-secondary" />
      </div>
    </Card>
  );
};

export default SystemAlertsCard;
