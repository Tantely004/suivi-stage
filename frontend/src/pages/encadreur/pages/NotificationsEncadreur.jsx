import React from 'react';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';

const NotificationsEncadreur = () => {
  const notifications = [
    { type: 'info', text: 'Un nouveau rapport a été déposé par Jean Rakoto.' },
    { type: 'warn', text: 'Entretien prévu avec Fanja Randrian dans 24h.' },
    { type: 'success', text: 'Votre dernier feedback a bien été envoyé.' },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications & Alertes</h1>

      <Card className="shadow-sm bg-white">
        <ul className="space-y-3">
          {notifications.map((notif, index) => (
            <li key={index}>
              <Message severity={notif.type} text={notif.text} />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default NotificationsEncadreur;
