import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { addLocale, locale } from 'primereact/api';
import '../../../static/css/stagiaire/CalendrierStagiaire.css';

addLocale('fr', {
    firstDayOfWeek: 1,
    dayNames: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
    dayNamesShort: ["dim","lun","mar","mer","jeu","ven","sam"],
    dayNamesMin: ["D","L","M","M","J","V","S"],
    monthNames: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
    monthNamesShort: ["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],
    today: 'Aujourd\'hui',
    clear: 'Effacer'
});

locale('fr');

const CalendrierStagiaire = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Calendrier des Entretiens</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <Card title="📆 Calendrier interactif" className="shadow-sm bg-white">
          <div className="flex justify-center p-6"> {/* Espacement intérieur généreux */}
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              inline
              showWeek
              locale="fr"
              className="custom-calendar w-full max-w-md"
            />
          </div>

          {selectedDate && (
            <p className="text-center mt-4 text-gray-700 text-sm">
              Date sélectionnée : <strong>{selectedDate.toLocaleDateString()}</strong>
            </p>
          )}

          <div className="mt-6 text-right">
            <Button icon="pi pi-sync" label="Synchroniser Google" className="p-button-sm p-button-secondary" />
          </div>
        </Card>

        <Card title="📌 Entretiens planifiés" className="shadow-sm bg-white">
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Réunion hebdomadaire avec le tuteur</p>
                <p>📅 15 Avril 2025 à 10h00</p>
              </div>
              <Button icon="pi pi-eye" className="p-button-text p-button-sm" label="Voir le compte-rendu" />
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Réunion intermédiaire avec l’équipe SI</p>
                <p>📅 22 Avril 2025 à 09h30</p>
              </div>
              <Button icon="pi pi-eye" className="p-button-text p-button-sm" label="Voir le compte-rendu" />
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Validation livrable final</p>
                <p>📅 29 Avril 2025 à 14h00</p>
              </div>
              <Button icon="pi pi-eye" className="p-button-text p-button-sm" label="Voir le compte-rendu" />
            </li>
          </ul>
        </Card>

      </div>
    </div>
  );
};

export default CalendrierStagiaire;
