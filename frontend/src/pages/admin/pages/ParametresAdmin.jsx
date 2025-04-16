import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';

const ParametresAdmin = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Paramètres Administrateur</h1>

      <Card title="🔐 Sécurité du compte" className="shadow-sm bg-white mb-6">
        <p className="text-gray-700 text-sm mb-4">
          Changez le mot de passe ou les préférences d’accès.
        </p>
        <Button label="Modifier le mot de passe" icon="pi pi-key" className="p-button-sm p-button-warning" />
      </Card>

      <Card title="🔔 Préférences de notifications" className="shadow-sm bg-white">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 text-sm">Recevoir les notifications système</span>
          <InputSwitch checked={notifications} onChange={(e) => setNotifications(e.value)} />
        </div>
      </Card>
    </div>
  );
};

export default ParametresAdmin;
