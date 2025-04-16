import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CalendrierEncadreur = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Calendrier des Entretiens</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="📆 Calendrier" className="shadow-sm bg-white">
          <div className="flex justify-center">
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              inline
              showWeek
            />
          </div>
          {selectedDate && (
            <p className="mt-4 text-center text-gray-700 text-sm">
              Date sélectionnée : <strong>{selectedDate.toLocaleDateString()}</strong>
            </p>
          )}
        </Card>

        <Card title="🗓️ Entretiens Planifiés" className="shadow-sm bg-white">
          <ul className="space-y-4 text-gray-700 text-sm">
            <li>
              <p className="font-semibold">15 Avril 2025 — Jean Rakoto</p>
              <p>📌 Validation livrable intermédiaire</p>
            </li>
            <li>
              <p className="font-semibold">22 Avril 2025 — Fanja Randrian</p>
              <p>📌 Présentation avancée du projet</p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default CalendrierEncadreur;
