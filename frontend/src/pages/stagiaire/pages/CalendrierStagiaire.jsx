import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { addLocale, locale } from 'primereact/api';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const entretiens = [
    { id: 1, date: new Date(2025, 3, 15), title: "Réunion hebdo avec tuteur", heure: "10h00", comptesRendus: [] },
    { id: 2, date: new Date(2025, 3, 22), title: "Réunion équipe SI", heure: "09h30", comptesRendus: [{ titre: "Compte rendu n°1", fichier: "/fake.pdf" }] },
    { id: 3, date: new Date(2025, 3, 29), title: "Validation livrable final", heure: "14h00", comptesRendus: [] }
  ];

  const rendezVousFiltrés = selectedDate
    ? entretiens.filter(e => e.date.toDateString() === selectedDate.toDateString())
    : [];

  return (
    <div className="flex-1 p-8 bg-transparent min-h-screen">
      <p className="text-3xl text-gray-800 mb-[4rem] poppins-title">Calendrier des Entretiens</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 poppins-light">

        <Card className="shadow-sm bg-white">
          <div className="flex justify-center p-6">
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              inline
              showWeek
              locale="fr"
              className="custom-calendar w-full max-w-md"
            />
          </div>

          {selectedDate && rendezVousFiltrés.length > 0 && (
            <div className="mt-4 text-sm text-gray-700 text-center">
              <h4 className="font-bold mb-2">Entretiens pour le {selectedDate.toLocaleDateString()}</h4>
              <ul>
                {rendezVousFiltrés.map((r, i) => (
                  <li key={i}>📅 {r.title} — {r.heure}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 text-right">
            <Button icon="pi pi-sync" label="Synchroniser Google" className="p-button-sm p-button-secondary" />
          </div>
        </Card>

        <Card className="shadow-sm bg-white poppins-light">
          <div className="poppins-title xl:mt-[0.25rem] xl:ml-[0.25rem]">
            <p>Tous les entretiens planifiés</p>
          </div>
          <ul className="space-y-4 text-gray-700 text-sm">
            {entretiens.map((r, index) => (
              <li key={index} className="flex flex-col gap-1 border-b py-2">

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{r.title}</p>
                    <p>📅 {r.date.toLocaleDateString()} à {r.heure}</p>
                  </div>

                  <Button
                    icon="pi pi-plus"
                    className="p-button-text p-button-sm"
                    label="Compte Rendu"
                    onClick={() => navigate(`/uploadcompterendustagiaire/${r.id}`)}
                  />
                </div>

                {r.comptesRendus.length > 0 && (
                  <ul className="pl-4">
                    {r.comptesRendus.map((c, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span>{c.titre}</span>
                        <a href={c.fichier} className="text-blue-600 underline" download>Télécharger</a>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default CalendrierStagiaire;
