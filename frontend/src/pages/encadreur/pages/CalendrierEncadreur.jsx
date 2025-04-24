import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const CalendrierEncadreur = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Calendrier des Entretiens</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="📆 Calendrier" className="shadow-sm bg-white">
          <div className="flex justify-center p-6">
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

        <Card title="🗓️ Entretiens Planifiés" className="shadow-sm bg-white relative">
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

          <button
            className="absolute bottom-3 right-3 text-blue-600 text-xl hover:text-blue-800"
            onClick={() => navigate("/manageentretiensencadreur")}
          >
            <FaArrowCircleRight />
          </button>
        </Card>
      </div>
    </div>
  );
};

export default CalendrierEncadreur;
